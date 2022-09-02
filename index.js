const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge');

const userSchema = require('./api/user/schema/user.graphql')
const userResolvers = require('./api/user/resolvers/userResolvers')
const UsersAPI = require('./api/user/datasource/user')

const turmaSchema = require('./api/turma/schema/turma.graphql')
const turmaResolvers = require('./api/turma/resolvers/turmaResolvers')

const typeDefs = mergeTypeDefs([userSchema, turmaSchema])
const resolvers = [userResolvers, turmaResolvers]

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