import sequelize from 'sequelize';

import models from '../../models';
const Op = sequelize.Op;

const moviesFromDb = models.Movie;
const actorsFromDB = models.Actor;
const directorsFromDb = models.Director;

const resolvers = {
  Query: {
    async movies(parent, args, context, info) {
      console.log("gggg")
      const movies = await moviesFromDb.findAll();
      return movies;
    },
    async actors(parent, args, context, info) {
      const actors = await actorsFromDB.findAll();
      return actors;
    },
    async directors(parent, args, context, info) {
      const directors = await directorsFromDb.findAll();
      return directors;
    }
  },
  Movies: {
    async actors(parent, args, context, info) {
      const actors = await actorsFromDB.findAll({
        where: {
          movieId: parent.id
        }
      });
      return actors;
    }
  },
  Actors: {
    async directors(parent, args, context, info) {
      const directors = await directorsFromDb.findAll({
        where: {
          actorId: parent.id
        }
      });
      return directors
    }
  }
}
export { resolvers  as default }
