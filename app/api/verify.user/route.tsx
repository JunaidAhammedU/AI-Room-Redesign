import { NextResponse } from "next/server";
import User from "@/models/user.schema";
import connectToDatabase from "@/config/db";

export async function POST(req: Request) {
  await connectToDatabase();

  const { user } = await req.json();
  try {
    const existingUser = await User.findOne({
      email: user?.primaryEmailAddress?.emailAddress,
    });

    if (!existingUser) {
      const newUser = new User({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
      const saveUser = await newUser.save();
      return NextResponse.json({ result: saveUser });
    }

    return NextResponse.json({ result: existingUser });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}
