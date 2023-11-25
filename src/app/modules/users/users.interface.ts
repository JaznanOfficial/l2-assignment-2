// import { Model } from 'mongoose';

export type fullNameType = {
  firstName: string;
  lastName: string;
};

export type addressesType = {
  street: string;
  city: string;
  country: string;
};

export type ordersType = {
  productName: string;
  price: number;
  quantity: number;
};

export type UsersType = {
  userId: number;
  username: string;
  password: string;
  fullName: fullNameType;
  age: number;
  email: string;

  isActive: boolean;
  hobbies: Array<string>;
  address: addressesType;
  orders: ordersType;
};

// export interface UserModel extends Model<UsersType> {
//   isUserExists(id: string): Promise<UsersType | null>;
// }
