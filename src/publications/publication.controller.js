import { response, request } from "express";
import Publication from "./publication.js";
import User from "../users/user.js";
import  jwt from 'jsonwebtoken';


export const publicationPost = async(req, res) =>{
    const { author, title, category, text} = req.body;
    const publication = new Publication({author, title, category, text});
    const token = req.header('x-token');

    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userId = decoded.uid;

    const user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            msg: 'User no found'
        })
    }

    publication.author = user.name;

    await publication.save();

    res.status(200).json({
        publication
    })
}

export const publicationGet = async(req, res) =>{
    const { limit, from} = req.query;
    const token = req.header('x-token');

    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userId = decoded.uid;

    const user = await User.findById(userId);
    
    if(!user){
        return res.status(400).json({
            msg: 'User not found'
        })
    }

    const query = { state: true, author: user.name };

    const [total, publications] = await Promise.all([
        Publication.countDocuments(query),
        Publication.find(query)
        .skip(Number(from))
        .limit(Number(limit))
    ])

    res.status(200).json({
        total,
        publications
    })
}

export const putPublication = async(req, res = response) => {
    const { id } = req.params;
    const {_id, author, comment, ...resto} = req.body;
    const token = req.header('x-token');

    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userId = decoded.uid;

    const user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            msg: 'User not found'
        })
    }

    const publication = await Publication.findById(id);

    
    if(!publication){
        return res.status(400).json({
            msg: 'publication not found'
        })
    }

    if(publication.author !== user.name){
        return res.status(403).json({
            msg: 'publication not found'
        })
    }

    const publicationAfter = req.publication;
    const publicationUpdate = await Publication.findByIdAndUpdate(id);

    res.status(200).json({
        msg: "The update was correct",
        publication: publicationUpdate,
        publicationAfter
    })

}
