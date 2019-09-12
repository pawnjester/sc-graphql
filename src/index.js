import  { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import 'dotenv/config';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Movies from './resolvers/Movies';
import Actors from './resolvers/Actors';
import db from './models/index';

const resolvers = {
  Query,
  Mutation,
  Movies,
  Actors
}
const options = {
  endpoint: '/graphql',
  port: process.env.PORT
}

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
  context(request) {
    return {
      request
    }
  }
});


db.sequelize
  .authenticate()
  .then(() =>
    server.start(options, ({ port }) => console.log('The server is up'))
)
