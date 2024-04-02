import { postModel } from "../schema.js"
async function getPosts(parent)
{
   const posts = await postModel.find({id:parent.id})   
   return posts
}

export {getPosts}