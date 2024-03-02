import User from '../users/user.js';

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