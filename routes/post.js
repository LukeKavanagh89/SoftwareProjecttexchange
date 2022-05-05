import express from 'express';
import { getPosts, updatePost, createPost, likePost, deletePost } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/id', updatePost);
router.patch('/likePost', likePost);
router.delete('/:id', deletePost);


export default router;