import { directors } from  '../seed/seedData';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Directors', [...directors ]);
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Directors', null, {});
  }
};
