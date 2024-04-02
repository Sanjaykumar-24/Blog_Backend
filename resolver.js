import query from "./resolver/query.js" 
import mutation from "./resolver/mutation.js"
import  user  from "./resolver/user.js"
const resolvers = {
   Query:query,
   Mutation:mutation,
   User:user
}
export default resolvers