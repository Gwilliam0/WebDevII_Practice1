import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    nif: {
      type: String,
      required: [true, 'NIF is required'],
      unique: true
    },
    role: {
      type: String,
      enum: ['guest', 'admin'],
      default: 'admin'
    },
    status: {
      type: String,
      enum: ['pending', 'verified'],
      default: 'pending'
    },
    verificationCode: {
      type: Number,
      default: 0,
    },
    verificationAttempts: {
      type: Number,
      default: 3,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    address: {
      street: { type: String },
      number: { type: String },
      postal: { type: String },
      city: { type: String },
      province: { type: String },
    },
  },
  {
    timestamps: true,   // Añade createdAt y updatedAt
  }
);

const User = mongoose.model('User', userSchema);

export default User;