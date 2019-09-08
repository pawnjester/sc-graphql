import sequelize from 'sequelize';

import models from '../../models';
const directorsFromDb = models.Director;

const Actors = {
  async directors(parent, args, context, info) {
    const directors = await directorsFromDb.findAll({
      where: {
        actorId: parent.id
      }
    });
    return directors
  }
}

export { Actors as default }
