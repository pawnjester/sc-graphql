import { movies } from '../seed/seedData';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Movies', [...movies]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
