const typeDefs = `
  type User{
    username : String!,
    password : String!,
    dob : String!,
    getPosts : [Posts]!
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

   input Token{
     token : String!
   }

   type Query{
     login(loginuser:loginUser!) : String!
     oauth(token:Token!) : User!
   }

   type Mutation{
     register(newuser:NewUser!) : String!
   }
`
export default typeDefs