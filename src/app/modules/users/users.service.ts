import { UsersType } from './users.interface';
import { UserModel } from './users.model';

const createUserService = async (data: UsersType) => {
  //   if (await isUserExists(data.userId)) {
  //     throw new Error('User already exists!');
  //   }
  const result = await UserModel.create(data);
  return result;
};

const getAllUserService = async () => {
  const result = await UserModel.aggregate([
    {
      $project: {
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ]);
  return result;
};

const getSingleUserService = async (id: string) => {
  // console.log(id);
  const result = await UserModel.aggregate([
    { $match: { userId: Number(id) } },
    {
      $project: {
        password: 0,
      },
    },
  ]);
  console.log(result);
  return result;
};

const updateUserService = async (data: UsersType, userId: string) => {
  //   if (await isUserExists(data.userId)) {
  //     throw new Error('User already exists!');
  //   }
  const result = await UserModel.updateOne({ _id: userId }, data);
  return result;
};

const deleteUserService = async (id: string) => {
  const result = await UserModel.deleteOne({ _id: id });
  return result;
};

export const UserService = {
  createUserService,
  getAllUserService,
  getSingleUserService,
  deleteUserService,
  updateUserService,
};
