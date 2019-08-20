import { Document, Model, model, Schema } from 'mongoose';

const UserSchema = new Schema({
  age: Number,
  email: { type: String, required: true },
  forename: String,
  password: { type: String, required: true },
  surname: String,
  team: String,
});

export interface IUser extends Document {
  forename: string;
  surname: string;
  email: string;
  password: string;
  age: number;
  team: string;
}

export default model<IUser>('user', UserSchema);
