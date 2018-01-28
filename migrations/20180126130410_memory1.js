exports.up = (knex, Promise) => {
  return knex.schema.createTable('resolution', table => {
    table.increments('id').primary();
    table.date('dueDate');
    table.text('resolution'); 
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('resolution');
};