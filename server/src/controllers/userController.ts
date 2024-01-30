import {Request, Response} from 'express';
import User, { IUser } from '../models/userModel.js';


export async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export async function getUserById(req: Request, res: Response): Promise<void> {
    res.send('getUserById called');
}


export async function updateUsers(req: Request, res: Response): Promise<void> {
    console.log('userController|updateUsers| JSON.stringify(req.body): ' + JSON.stringify(req.body));
    // TODO update Users in mongodb
}