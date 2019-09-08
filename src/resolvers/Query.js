import sequelize from 'sequelize';

import models from '../../models';
const Op = sequelize.Op;

const moviesFromDb = models.Movie;
const actorsFromDB = models.Actor;
const directorsFromDb = models.Director;

const Query = {
    async movies(parent, args, context, info) {
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
}

export { Query  as default }
