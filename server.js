import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import typeDefs from './typedef.js'
import resolvers from './resolver.js'
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connection successful..!!')
}).catch(()=>{
    console.log('database connection unsucessful..!!')
})

const server = new ApolloServer({
   typeDefs,
   resolvers
})

const {url} = await startStandaloneServer(server,{
    listen:{port:process.env.PORT}
})

console.log(url)