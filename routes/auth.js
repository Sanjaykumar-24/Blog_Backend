import generateToken from '../token.js'
import { userModel } from "../schema.js"
import bcrypt from 'bcrypt'
async function register(_,{newuser:{username,password,dob}})
   {
   try{
   const user = await userModel.findOne({username:username})
   if(user)
   {
      return JSON.stringify({message:"Failer",error:"user already exists"})
   }
   else
   {
      const hashpassword = await bcrypt.hash(password,10)
      const newuser = new userModel({
         username:username,
         password:hashpassword,
         dob:dob
      })
      const res = await newuser.save()
      if(!res)
      {
         return JSON.stringify({message:"Failed",error:"failed in creating user"})
      }
      else
      {
         const token = generateToken({id:res.id})
         return JSON.stringify({message:"Success",token:token})
      }
   }
   }
   catch(error){
     return JSON.stringify({message:"Failed",error:"internal server error"})
   }
}


async function login(_,{loginuser:{username,password}})
{
    try{
      const user = await userModel.findOne({username:username})
      if(!user)
      {
         return JSON.stringify({message:"Failed",error:"user not exist"})
      }
      else
      {
            const result = await bcrypt.compare(password, user.password)
            if (!result) {
               return JSON.stringify({ message: "Failed", error: "wrong password" })
            }
            else{
               const token = generateToken({id: user.id})
               return JSON.stringify({ message: "Success", token: token})
            }
    }
   }
    catch(error){
      return JSON.stringify({message:"Failed",error:"internal server error"})
    }
}

const call = (data)=>{
   console.log(data)
}

export {register,login}