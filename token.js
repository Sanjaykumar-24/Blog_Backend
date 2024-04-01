import jwt from 'jsonwebtoken'
const generateToken=(user)=>{
     const token = jwt.sign(user,process.env.SECRET_KEY,{
        expiresIn:"30d"
     })
    return token
} 
export default generateToken