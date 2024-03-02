import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is mandatory']
    },
    username: {
        type: String,
        required: [true, 'The username is mandatory'],
        uniqued: true
    },
    email: {
        type: String,
        required: [true, 'The email is mandatory'],
        uniqued: true
    },
    role : {
        type: String,
        required: true,
        enum: ["USER_ROLE"]
    }
})


export default mongoose.model('User', UserSchema);