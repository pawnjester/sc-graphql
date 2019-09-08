import { actors } from '../seed/seedData';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Actors', [...actors]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Actors', null, {});
  }
};
