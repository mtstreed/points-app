import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    _id: number;
    name: string;
    age: number;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true }, 
    age: { type: Number, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;