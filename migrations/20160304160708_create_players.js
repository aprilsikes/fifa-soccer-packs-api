
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table){
    table.increments();
    table.string('name');
    table.string('position');
    table.string('team');
    table.text('image_url');
    table.integer('fifa_rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
