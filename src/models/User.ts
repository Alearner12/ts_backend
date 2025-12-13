import mongoose, { Schema, Document } from 'mongoose';

/**
 * User Interface - defines the structure of a User document
 */
export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User Schema - MongoDB schema definition
 */
const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    age: {
      type: Number,
      min: [0, 'Age cannot be negative'],
      max: [150, 'Age seems unrealistic']
    }
  },
  {
    timestamps: true // Automatically creates createdAt and updatedAt fields
  }
);

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);
