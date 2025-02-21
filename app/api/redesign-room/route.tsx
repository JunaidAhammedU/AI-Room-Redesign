import { storage } from "@/config/firebase";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import AI_IMG_DB from "@/models/ai.image.schema";
import connectToDatabase from "@/config/db";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  await connectToDatabase();
  const { imageUrl, roomType, designType, description, userEmail } =
    await req.json();
  if (!imageUrl || !roomType || !designType || !userEmail) {
    return NextResponse.json({ error: "All fields are required" });
  }

  try {
    const output: any = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      {
        input: {
          image: imageUrl,
          prompt: `Create a room of type ${roomType} with ${designType} design. The room should be of high quality. The room should have ${description}.`,
        },
      }
    );
    if (!output) {
      throw new Error("Something went wrong!");
    }

    const base64Image: any = await convertImageToBase64(output);

    // upload to firebase
    const fileName = Date.now() + ".png";
    const imageRef = ref(storage, `room-redesign/` + fileName);
    await uploadString(imageRef, base64Image, "data_url");
    const downloadUrl = await getDownloadURL(imageRef);

    // save to db
    const newAiImage = new AI_IMG_DB({
      roomType,
      designType,
      orgImage: imageUrl,
      aiImage: downloadUrl,
      userEmail: userEmail,
      createdAt: new Date(),
    });
    await newAiImage.save();
    return NextResponse.json({ result: downloadUrl });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message });
  }
}

async function convertImageToBase64(imageUrl: string) {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const base64Image = Buffer.from(response.data).toString("base64");
  return "data:image/png;base64," + base64Image;
}
