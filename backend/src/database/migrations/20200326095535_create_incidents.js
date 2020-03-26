
exports.up = function(knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // Create Foreing key
    table.string('ngo_id').notNullable();
    table.foreign('ngo_id').references('id').inTable('ngos');
  });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
