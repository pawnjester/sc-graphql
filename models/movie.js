'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
      timestamps: false,
  });
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Actor, {
      foreignKey: 'movieId'
    })
    Movie.hasMany(models.Director, {
      foreignKey: 'movieId'
    })
  };
  return Movie;
};
