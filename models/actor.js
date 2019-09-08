'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    country: DataTypes.STRING,
    movieId: {
      type: DataTypes.STRING,
      references: {
        model: 'Movies',
        key: 'id',
        as: 'movieId'
      }
    }
  }, {
    timestamps: false,
  });
  Actor.associate = function(models) {
    // associations can be defined here
    Actor.hasMany(models.Director, {
      foreignKey: 'actorId'
    });
    Actor.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      onDelete: 'CASCADE'
    });
  };
  return Actor;
};
