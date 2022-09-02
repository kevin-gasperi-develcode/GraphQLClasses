const { ApolloServer } = require('apollo-server')
const userSchema = require('./api/user/schema/user.graphql')
const userResolvers = require('./api/user/resolvers/userResolvers')
const UsersAPI = require('./api/user/datasource/user')

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI()
    }
  }
} )

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})

// npx json-server --watch api/data/dados.json << to start server
// npm start << to run