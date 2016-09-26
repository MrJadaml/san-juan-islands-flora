# San Juan Flora

WIP - An API for information regarding plants that are native and well suited for the region of the San Juan Islands.

The base list of flora that this API works from was provided by the Washington Native Plant Society. This DOC was cleaned up so that the _scientific_, _common_, and _family_ names could be easily parsed into JSON to _seed_🌱 our _plants_🌿 data into a PG database. The original DOC can be found here: [San Juan County species list](http://www.wnps.org/plant_lists/counties/san_juan/san_juan_county.html)


### Startup instructions:

Install the Knex CLI:
`$ npm i knex -g`

<br>
Launch Postgres so that you can import your seed data (if you don't
already have it running in the background)

<br>
Create a new database named *san_juan_plants_dev*:
`$ createdb san_juan_plants_dev`

<br>
Run the Knex migrations:
`$ knex migrate:latest`

<br>
Seed the database:
`$ knex seed:run`

<br>
At this point you should be ready to go. You can verify that your DB was
seeded correctly from your PG server:

```
$ psql

USER=# \c san_juan_plants_dev
san_juan_plants_dev=# SELECT * FROM plants;
```

That should produce a table with all the plants. Type `q` to close the
table, then `\q` to quite out of the Postgres shell.
