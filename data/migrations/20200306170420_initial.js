
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
        table.boolean("completed").defaultTo(false)
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description").notNull()
        table.text("notes")
        table.integer("projects_id")
          .references("id")
          .inTable("projects")
      table.boolean("completed").defaultTo(false)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
    })

    await knex.schema.createTable("projects_resources", (table) => {
        table.integer("projects_id")
            .references("id")
            .inTable("projects")
            //
        table.integer("resources_id")
            .references("id")
            .inTable("resources")
        //since this table doesn't need an ID column, we can make
        // the primary key a combination of the two columns
        table.primary(["projects_id", "resources_id"])
      })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
