const typeDefs = `
  type Users{
    username : String!,
    password : String!,
    dob : String!
  }

  type Posts{
    username : String!,
    content : String!,
    date : String!,
    genre: String!,
    likes : Int!,
    dislikes : Int!
  }

   input NewUser{
      username : String!,
      password : String!,
      dob : String!
   }

   input loginUser{
    username : String!,
    password : String!
   }

   type Query{
     login(loginuser:loginUser!) : String!
   }

   type Mutation{
     register(newuser:NewUser!) : String!
   }
`
export default typeDefs