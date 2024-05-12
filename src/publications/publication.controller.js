import { response, request } from "express";
import Publication from "./publication.js";
import User from "../users/user.js";
import  jwt from 'jsonwebtoken';


export const publicationPost = async(req, res) =>{
    const {author, title, category, text, urlImage, urlProyect } = req.body;
    const publication = new Publication({ author, title, category, text, urlImage, urlProyect});

    await publication.save();

    res.status(200).json({
        publication
    })
}

export const publicationGet = async(req, res) =>{
    const { limit, from} = req.query;


    const query = { state: true};

    const [total, publications] = await Promise.all([
        Publication.countDocuments(query),
        Publication.find(query)
        .skip(Number(from))
        .populate({
            path: 'comment',
            match: {state: true}
        })
        .limit(Number(limit))
    ])

    res.status(200).json({
        total,
        publications
    })
}

export const putPublication = async(req, res = response) => {
    const { id } = req.params;
    const {_id, author, comment, category, ...resto} = req.body;
   ;

    if(!user){
        return res.status(400).json({
            msg: 'User not found'
        })
    }

    const publicationBefore  = await Publication.findById(id);

    
    if(!publicationBefore){
        return res.status(400).json({
            msg: 'publication not found'
        })
    }


    const publicationUpdate = await Publication.findByIdAndUpdate(id, resto, {new: true});

    res.status(200).json({
        msg: "The update was correct",
        publication: publicationUpdate,
        publicationBefore 
    })

}

export const deletePublication = async(req, res) =>{
    const { id } = req.params;

    const publicationBefore  = await Publication.findById(id);

    if(!publicationBefore){
        return res.status(400).json({
            msg: 'publication not found'
        })
    }


    const publicationUpdate = await Publication.findByIdAndUpdate(id, {state: false}, {new: true});

    res.status(200).json({
        msg: "The delete was correct",
        publication: publicationUpdate,
        publicationBefore 
    })


}