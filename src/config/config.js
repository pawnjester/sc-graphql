require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const dialect = 'postgres';
const url = env === 'production' ?
  process.env.DATABASE_URL :
  `${process.env.DATABASE_URL}${env}`;
const devMode = env === ('development' || 'test');
console.log(process.env.DATABASE_URL)
const config = {
  url,
  dialect,
  logging: devMode ? log => log : false,
  dialectOptions: {
    multipleStatements: true,
  },
};
module.exports = config;
