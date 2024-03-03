import  jwt  from "jsonwebtoken";
import User from '../users/user.js';

export const validateJWT = async (req, res, next) => {
    const token = req.header("x-token");

    if(!token){
        return res.status(401).json({
            msg: "There is no token in the request"
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const user = await User.findById(uid);

        if(!user){
            return res.status(401).json({
                msg: 'Usario no exist in the database'
            })
        }

        if(!user.state){
            return res.status(401).json({
                msg: 'Token is not valid or the usuario have state false'
            })
        }

        req.user = user;

        next();
        
    } catch (e) {
        console.log(e);
        res.status(401).json({
            msg: "Token is not valid",
        });   
    }

};