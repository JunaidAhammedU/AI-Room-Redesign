// Backend Code (/api/buy-credits)
import User from "@/models/user.schema";
import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { userEmail, currentCredits } = await req.json();

    if (!userEmail || currentCredits === undefined) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { $inc: { credits: -1 } },
      { new: true, runValidators: true }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ 'data': user, 'status': true });
  } catch (error: any) {
    console.error("Error updating credits:", error.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
