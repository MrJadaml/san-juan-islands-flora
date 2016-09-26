
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', (t) => {
    t.increments();
    t.text('sci_name');
    t.text('common_name');
    t.text('family_name');
    t.boolean('is_native');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};
