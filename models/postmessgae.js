import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    concert: String, 
    tags: [String],
    selectedFile: String,
    interestedCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()

    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;