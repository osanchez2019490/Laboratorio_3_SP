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
    password: {
        type: String,
        required: [true, 'The password is mandatory']
    },
    role : {
        type: String,
        required: true,
        enum: ["USER_ROLE"]
    },
    state: {
        type: Boolean,
        default: true
    }

})


export default mongoose.model('User', UserSchema);