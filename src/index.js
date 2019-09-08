import  { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers/Query';
import db from '../models/index';


const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
});

db.sequelize
  .authenticate()
  .then(() =>
    server.start(() => console.log('The server is up'))
)
