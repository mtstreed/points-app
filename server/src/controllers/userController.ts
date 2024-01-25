import {Request, Response} from 'express';

const getAllUsers = (req: Request, res: Response) => {
    res.send('getAllUsers called.');
}

const getUserById = (req: Request, res: Response) => {
    res.send('getUserById called.');
}

export default {
    getAllUsers,
    getUserById,
};