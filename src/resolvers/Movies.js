import sequelize from 'sequelize';
import models from '../../models';
const Op = sequelize.Op;

const moviesFromDb = models.Movie;
const actorsFromDB = models.Actor;

const Movies = {
  async actors(parent, args) {
    console.log(parent);
    const actors = await actorsFromDB.findAll({
      where: {
        movieId: parent.id
      }
    });
    return actors;
  },
}

export { Movies as default }
