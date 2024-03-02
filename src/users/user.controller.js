import { response, request } from "express";
import bcrypt from 'bcrypt';
import User from './user.js';

export const userPost = async (req, res) => {
    const { role, password, name, username, email} = req.body;
    const user = new User({role, password, name, username, email});

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    user.role = 'USER_ROLE';

    await user.save();

    res.status(200).json({
        user
    });
}

export const putUser = async (req, res = response) => {
    const {id} = req.params;
    const { _id, password, role, state, ...resto} = req.body;
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({ msg:'No token, authorization denied'});
    }

    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    if(!decoded || !decoded.uid || decoded.uid !== id){
        return res.status(403).json({ msg: 'You do not have permission to update this profile'});
    }

    if(password){
        const user = await User.findById(id);
        const validarPassword = bcrypt.compareSync(password, user);

        if(!validarPassword){
            return res.status(400).json({ msg: 'The password after is incorrect'});
        }
    }

    await User.findByIdAndUpdate(id, resto, {new:true});

    const userPrevious = req.user;
    const userUpdate = await User.findByIdAndUpdate(id, resto, {new: true});

    res.status(200).json({
        msg: 'User updated correctly',
        user: userUpdate,
        userPrevious
    })
}