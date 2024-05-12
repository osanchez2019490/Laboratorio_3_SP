import { response, request } from "express";
import Publication from "../publications/publication.js";
import User from '../users/user.js';
import Comment from './comment.js';
import  jwt from 'jsonwebtoken';

export const commentPost = async (req, res) =>{
    const { user, publication, comment } = req.body;
    

    const publicationModel = await Publication.findOne({title: publication});
  

    if (!publication) {
        return res.status(404).json({ msg: 'Publication not found' });
    }

    const newComment = new Comment({publication: publicationModel.title, comment});


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
    const { comment } = req.body;


    const commentBefore = await Comment.findById(id);

    if(!commentBefore){
        return res.status(400).json({
            msg: 'publication not found'
        })
    }


    const commentUpdate = await Comment.findByIdAndUpdate(id, { comment: comment }, { new: true });

    res.status(200).json({
        msg: "The update was correct",
        comment: commentUpdate,
        commentBefore
    })

}

export const commentDelete = async(req, res) => {
    const { id } = req.params;
    
 


    const commentBefore = await Comment.findById(id);

    if(!commentBefore){
        return res.status(400).json({
            msg: 'publication not found'
        })
    }

    const commentUpdate = await Comment.findByIdAndUpdate(id, {state: false}, {new: true});

    res.status(200).json({
        msg: "The update was correct",
        comment: commentUpdate,
        commentBefore
    })
}