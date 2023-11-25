import { Request, Response } from 'express';
import userValidationSchema from './users.validation';
import { UserService } from './users.service';
import { UserModel } from './users.model';

const createUsersController = async (req: Request, res: Response) => {
  try {
    const usersData = req?.body;
    // console.log(usersData);
    const zodParsedData = userValidationSchema.parse(usersData);

    const result = await UserService.createUserService(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'User is created succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserService();

    res.status(200).json({
      success: true,
      message: 'Users are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // console.log(userId);

    const result = await UserService.getSingleUserService(userId);

    res.status(200).json({
      success: true,
      message: 'User is retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const usersData = req.body;
    // console.log(usersData);
    const zodParsedData = userValidationSchema.parse(usersData);

    const result = await UserService.updateUserService(zodParsedData, userId);

    res.status(200).json({
      success: true,
      message: 'User is updated succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserService.deleteUserService(userId);

    res.status(200).json({
      success: true,
      message: 'User is deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const UsersController = {
  createUsersController,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
};
