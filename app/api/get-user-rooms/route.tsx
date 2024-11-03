import RoomDesign from "@/models/ai.image.schema";
import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectToDatabase();
    try {
        const { userEmail } = await req.json();
        const userRooms = await RoomDesign.find({ userEmail }).sort({ createdAt: -1 });
        return NextResponse.json({ result: userRooms || [] });
    } catch (error: any) {
        console.error("Error fetching user rooms:", error.message);
        return NextResponse.json({ error: "Error fetching user rooms" }, { status: 500 });
    }
}
