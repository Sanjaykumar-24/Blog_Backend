import { postModel } from "../schema.js"
async function addPost(parent,{newpost:{content,date,genre}})
{
    if(parent.username!="Error" && parent.username!="Failed")
    {
    try{
        const post = new postModel({
            username : parent.username,
            content: content,
            date : date,
            genre : genre,
            likes : 0,
            dislikes : 0
        })
        const res = await post.save()
        if(!res)
        {
            return JSON.stringify({message:"Failed",error:"error in data"})
        }
        else
        {
            return JSON.stringify({message:"Success",data:res})
        }
    }
    catch(error)
    {
        return JSON.stringify({message:"Failed",error:"internal server error"})
    }
    }
    else
    {
        return JSON.stringify({message:"Failed",error:"token error"})
    }
}


async function deletePost(_,id)
{
   try{
      const data = await postModel.deleteOne({_id:id.id})
      if(data.deletedCount == 0)
      {
        return JSON.stringify({message:"Failed",error:"failed in deleting"})
      }
      else
      {
        return JSON.stringify({message:"Success",error:"nil"})
      }
   }
   catch(error)
   {
    return JSON.stringify({message:"Failed",error:"internal server error"})
   }
}


export {addPost, deletePost}