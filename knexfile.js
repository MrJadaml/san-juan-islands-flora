module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/san_juan_plants_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.san_juan_plants
  }

};
