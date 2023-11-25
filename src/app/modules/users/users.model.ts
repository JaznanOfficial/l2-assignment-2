import { Schema, model } from 'mongoose';
import {
  UserModelInterface,
  UsersType,
  addressesType,
  fullNameType,
  ordersType,
} from './users.interface';

const fullNameSchema = new Schema<fullNameType>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
  },
});

const addressSchema = new Schema<addressesType>({
  street: {
    type: String,
    required: [true, 'street is required'],
  },
  city: {
    type: String,
    required: [true, 'city is required'],
  },
  country: {
    type: String,
    required: [true, 'country is required'],
  },
});

const ordersSchema = new Schema<ordersType>({
  productName: {
    type: String,
    required: [true, 'product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'price is required'],
  },
});

const userSchema = new Schema<UsersType, UserModelInterface>({
  userId: {
    type: Number,
    required: [true, 'userId is required'],
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    trim: true,
  },
  fullName: {
    type: fullNameSchema,
    required: [true, 'Full name is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'isActive value is required'],
    default: true,
  },
  hobbies: [
    {
      type: String,
    },
  ],
  address: {
    type: addressSchema,
  },
  orders: {
    type: ordersSchema,
  },
});

//creating a custom static method
userSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await UserModel.findOne({ _id: id });
  return existingUser;
};

export const UserModel = model('User', userSchema);
