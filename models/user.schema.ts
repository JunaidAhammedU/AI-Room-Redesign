import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  imageUrl: string;
  credits: number;
}

const UserSchema: Schema<UserDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String, required: true },
  credits: { type: Number, required: true, default: 5 },
});

const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);
export default User;
