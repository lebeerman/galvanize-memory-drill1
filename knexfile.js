// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

/*
const database = require('./database-connection');

module.exports = {
  list() {
    return database('coffee').select();
  },
  read(id) {
    return database('coffee')
      .select()
      .where('id', id)
      .first();
  },
  create(coffee) {
    return database('coffee')
      .insert(coffee)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, coffee) {
    return database('coffee')
      .update(coffee)
      .where('id', id)
      .returning('*')
      .then(record => record);
  },
  delete(id) {
    return database('coffee')
      .delete()
      .where('id', id);
  }
};
*/