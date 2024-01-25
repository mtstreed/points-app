import {Request, Response} from 'express';
import User, { IUser } from '../models/userModel.js';

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getUserById = (req: Request, res: Response) => {
    res.send('getUserById called');
}

export default {
    getAllUsers,
    getUserById,
};