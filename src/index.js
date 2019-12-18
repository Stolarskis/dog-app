const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
//const User = require('./resolvers/VaccRecord')
//const User = require('./resolvers/Owner')
//const Link = require('./resolvers/Dog')


const resolvers = {
  Query,
  Mutation,
  //Dog,
  //Owner,
  //VaccRecord, 
}

// 3  Define where to get graphql schema, resolvers and then add prisma reference to the context instance variable
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
