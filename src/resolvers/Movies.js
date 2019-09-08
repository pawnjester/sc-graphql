import sequelize from 'sequelize';

import models from '../../models';
const Op = sequelize.Op;

const actorsFromDB = models.Actor;


 const Movies = {
    async actors(parent, args, context, info) {
      const actors = await actorsFromDB.findAll({
        where: {
          movieId: parent.id
        }
      });
      return actors;
    }
  }

export { Movies as default }
