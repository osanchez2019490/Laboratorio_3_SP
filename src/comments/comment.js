import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    
    username: {
        type:String,
        required: [true, 'The username is mandatory']
    },
    publication: {
        type: String,
        required: [true, 'The publication is mandatory']
    },
    
    comment: {
        type: String,
        required: [true, 'The comment is mandatory']
    },

    state: {
        type: Boolean,
        default: true
    }

})

export default mongoose.model('Comment', CommentSchema);