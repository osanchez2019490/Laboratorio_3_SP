import { response, request } from "express";
import Publication from "./publication.js";

export const publicationPost = async(req, res) =>{
    const { author, title, category, text} = req.body;
    const publication = new Publication({author, title, category, text});

    await publication.save();

    res.status(200).json({
        publication
    })
}