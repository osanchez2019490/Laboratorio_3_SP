import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'The comment is mandatory']
    },

    state: {
        type: Boolean,
        default: true
    }

})