import { getPosts, myPosts } from "../routes/data.js"
import { addPost, deletePost } from "../routes/operations.js"
const user = {
   getPosts,
   myPosts,
   addPost,
   deletePost
}

export default user