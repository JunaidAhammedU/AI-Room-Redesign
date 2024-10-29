import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_REPLICATE_API_TOKEN,
});
export async function POST(req: Request) {
  const { imageUrl, roomType, designType, description } = await req.json();

  try {
    const input = {
      image: imageUrl,
      prompt: `Create a ${roomType} room with a ${designType} design. ${description}`,
    };

    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );
    console.log(output);
    return NextResponse.json({ result: output });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message });
  }
}
