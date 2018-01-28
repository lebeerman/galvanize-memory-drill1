require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres:///resolution'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
