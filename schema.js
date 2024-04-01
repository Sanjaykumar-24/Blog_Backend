import {model,Schema} from "mongoose"

const userSchema = new Schema({
    username:String,
    password:String,
    dob:String
})

const userModel = model('users',userSchema)

const postSchema = new Schema({
    username:String,
    content:String,
    date:String,
    genre:String,
    likes:Number,
    dislikes:Number
})

const postModel = model('posts',postSchema)

export {postModel,userModel}