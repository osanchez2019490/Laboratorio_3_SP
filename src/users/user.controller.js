import { response, request } from "express";
import bcrypt from 'bcrypt';
import User from './user.js';

export const userPost = async (req, res) => {
    const { role, password, name, username} = req.body;
    const user = new User({role, password, name, username});

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    user.role = 'USER_ROLE';

    await user.save();

    res.status(200).json({
        user
    });
}