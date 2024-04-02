import jwt from 'jsonwebtoken'
import { userModel } from '../schema.js'
async function auth(_,{token:{token}})
{
    try{
         const user = await jwt.verify(token,process.env.SECRET_KEY)
         const data = await userModel.findById(user.id)
            if(!data)
            {
                return {
                    username:"Failed",
                    password:"NULL",
                    dob:"NULL"
                }
            }
            else
            {
                return data
            }
    }
    catch(error)
    {
        return {
            username:"Error",
            password:"NULL",
            dob:"NULL"
        }
    }
}

export {auth}