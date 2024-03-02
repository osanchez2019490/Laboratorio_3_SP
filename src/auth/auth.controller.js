import bycrypt from 'bcrypt';
import User from '../users/user.js'
import { generateJWT } from '../helpers/generate-jwt.js';

export const login = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const user = await User.findOne({ $or: [{ username }, { email }] });
        if (!user) {
            return res.status(400).json({
                msg: "Incorrect credentials, user does not exist in the database"
            })
        }    
        if(!user.state) {
            return res.status(400).json({
                msg:"The user does not exist in the database"
            });
        }

        const validPassword = bycrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg: "The password is incorrect"
            });
        }

        const token = await generateJWT(user.id);

        res.status(201).json({
            msg: 'The login was correct!',
            user,
            token
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Contact administrator"
        })
    }
}