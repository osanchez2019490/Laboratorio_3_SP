import Publication from '../publications/publication.js';
import User from '../users/user.js';
import Comment from '../comments/comment.js';

export const existingEmail = async(email= '') => {
    const existingEmail = await User.findOne({email});
    if(existingEmail) {
        throw new Error(`The email ${email} does exist in the database`);
    }
}

export const existingUsername = async(username = '') => {
    const existingUsername = await User.findOne({username});
    if (existingUsername) {
        throw new Error(`The username ${username} does exist in the database`);
    }
}

export const existingById = async(id = '') =>{
    const existingById = await User.findOne({id});
    if(existingById){
        throw new Error(`The id ${id} does  exist in the database`);
    }
}


export const existingByIdPublication = async(id = '') =>{
    const existingById = await Publication.findOne({id});
    if(existingById){
        throw new Error(`The id ${id} does  exist in the database`);
    }
}

export const existingByIdComment = async(id = '') =>{
    const existingById = await Comment.findOne({id});
    if(existingById){
        throw new Error(`The id ${id} does  exist in the database`);
    }
}