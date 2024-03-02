import mongoose from "mongoose";

const PublicationSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title of the text is mandatory']
    },
    
    category:{
        type: String,
        required: [true, 'The category is mandatory']
    },

    text: {
        type: String,
        required: [true, 'The main text is mandatory']
    },

    state: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model('Publication', PublicationSchema)