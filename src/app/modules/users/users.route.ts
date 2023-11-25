import express from 'express';
import { UsersController } from './users.controller';

const router = express.Router();

router.post('/', UsersController.createUsersController);

router.get('/:userId', UsersController.getSingleUserController);
router.put('/:userId', UsersController.updateUserController);

router.delete('/:userId', UsersController.deleteUserController);

router.get('/', UsersController.getAllUsersController);

export const UserRoute = router;
