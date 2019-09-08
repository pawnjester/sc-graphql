'use strict';
module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define('Director', {
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    country: DataTypes.STRING,
    actorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Actors',
        onDelete: 'CASCADE'
      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Movies',
        onDelete: 'CASCADE'
      }
    }
  }, {
    timestamps: false
  });
  Director.associate = function(models) {
    // associations can be defined here
    Director.belongsTo(models.Actor, {
      foreignKey: 'actorId'
    })
    Director.belongsTo(models.Movie, {
      foreignKey: 'movieId'
    })
  };
  return Director;
};
