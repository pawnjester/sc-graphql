import sequelize from 'sequelize';

import models from '../models';
import { getUserId } from '../utils/auth'
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
    },
    async scoutbase_rating(parent, args, {request}, info) {
      const userId = getUserId(request)
      if(userId) {
        parent.scoutbase_rating = Math.floor(Math.random() * (9 - 5 + 1)) + 5
        return parent.scoutbase_rating
      } else{
        return null
      }
      return null;
    }
  }

export { Movies as default }
