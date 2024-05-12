import mongoose, { Schema } from "mongoose";

const PublicationSchema = mongoose.Schema({
    
    author: {
        type:String,
        required: [true, 'The author is mandatory']
    },
    
    title: {
        type: String,
        required: [true, 'The title of the text is mandatory']
    },
    
    urlImage:{
        type: String,
        required: [true, 'The image is mandatory']
    },

    text: {
        type: String,
        required: [true, 'The main text is mandatory']
    },

    urlProyect:{
        type: String,
        required: [true, 'The image is mandatory']
    },

    comment: {
        type: Schema.ObjectId,
        ref: 'Comment'
    },
    state: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model('Publication', PublicationSchema);