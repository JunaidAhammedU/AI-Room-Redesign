import mongoose, { Schema, Document } from 'mongoose';

export interface RoomDesignDocument extends Document {
  roomType: string;
  designType: string;
  orgImage: string;
  aiImage: string;
  userEmail: string;
  createdAt: Date;
}

const RoomDesignSchema: Schema<RoomDesignDocument> = new Schema({
  roomType: { type: String, required: true },
  designType: { type: String, required: true },
  orgImage: { type: String, required: true },
  aiImage: { type: String, required: true },
  userEmail: { type: String, required: true },
  createdAt: { type: Date, default: () => Date.now() },
});

const RoomDesign = mongoose.models.RoomDesign || mongoose.model<RoomDesignDocument>('RoomDesign', RoomDesignSchema);
export default RoomDesign;
