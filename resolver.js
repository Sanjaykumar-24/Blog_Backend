import query from "./resolver/query.js" 
import mutation from "./resolver/mutation.js"
import posts from "./resolver/posts.js"

const resolvers = {
   Query:query,
   Mutation:mutation,
   Posts:posts
}
export default resolvers