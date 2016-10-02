module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/san_juan_plants_test',
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/san_juan_plants_dev',
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.san_juan_plants
  }

};
