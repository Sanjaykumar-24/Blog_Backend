const typeDefs = `
  input NewPost{
    content : String!,
    date : String!,
    genre : String!
  }

  type User{
    username : String!,
    password : String!,
    dob : String!,
    getPosts : [Posts]!,
    myPosts : [Posts]!,
    addPost(newpost:NewPost) : String!,
    deletePost(id:ID!) : String!
  }

  type Posts{
    username : String!,
    content : String!,
    date : String!,
    genre : String!,
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
     auth(token:Token!) : User!
   }


   type Mutation{
     register(newuser:NewUser!) : String!
   }
`
export default typeDefs