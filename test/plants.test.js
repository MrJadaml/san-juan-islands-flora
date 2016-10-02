'use strict';

process.env.NODE_ENV = 'test';
process.env.PORT = 8888;

const request = require('supertest');
const app = require('../app.js');

describe('/api', () => {
  describe('GET /plants', () => {
    it('should return an an array', (done) => {
      request(app)
        .get('/api/plants')
        .expect('Content-Type', /json/)
        .expect(200, [{
          common_name: 'Wine grape',
          family_name: 'Vitaceae',
          id: 1,
          is_native: true,
          sci_name: 'Vitis vinifera'
        }, {
          common_name: 'Northern water-meal',
          family_name: 'Lemnaceae',
          id: 2,
          is_native: false,
          sci_name: 'Wolffia borealis'
        }, {
          common_name: 'Wide-blade eelgrass',
          family_name: 'Zosteraceae',
          id: 3,
          is_native: false,
          sci_name: 'Zostera marina'
        }], done);
    });
  });

  describe('GET /plants/:id', () => {
    it('should return a single plant object', (done) => {
      request(app)
        .get('/api/plants/2')
        .expect('Content-Type', /json/)
        .expect(200, {
          common_name: 'Northern water-meal',
          family_name: 'Lemnaceae',
          id: 2,
          is_native: false,
          sci_name: 'Wolffia borealis'
        }, done);
    });
  });

  describe('POST /plants', () => {
    it('should return a 405, method not allowed, error', (done) => {
      request(app)
        .post('/api/plants')
        .expect(405, done);
    });
  });

  describe('PUT /plants/:id', () => {
    it('should return a 405, method not allowed, error', (done) => {
      request(app)
        .put('/api/plants/1')
        .expect(405, done);
    });
  });

  describe('DELETE /plants/:id', () => {
    it('should return a 405, method not allowed, error', (done) => {
      request(app)
        .delete('/api/plants/3')
        .expect(405, done);
    });
  });
});
