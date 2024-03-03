import { response, request } from "express";
import Publication from "../publications/publication.js";
import User from '../users/user.js';
import Comment from './comment.js';
import  jwt from 'jsonwebtoken';

export const commentPost = async (req, res) =>{
    const { publication, comment } = req.body;
    const token = req.header('x-token');
    
    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userId = decoded.uid;

    const publicationModel = await Publication.findOne({title: publication});
    const user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            msg: 'User no found'
        })
    }


    if (!publication) {
        return res.status(404).json({ msg: 'Publication not found' });
    }

    const newComment = new Comment({publication: publicationModel.title, comment});

    newComment.username = user.username;

    await newComment.save();

    publicationModel.comment = newComment._id;
    await publicationModel.save();

    res.status(201).json({ 
        msg: 'Comment created successfully', 
        comment: newComment 
    });

}

export const commentPut = async(req, res = response) =>{
    const { id } = req.params;
    const { _id, username, publication,state, comment} = req.body;
    const token = req.header('x-token');

    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userId = decoded.uid;

    const user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            msg: 'User not found'
        })
    }

    const commentBefore = await
}