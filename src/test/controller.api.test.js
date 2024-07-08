const request = require('supertest');
const app = require('../../index.js'); 
const assert = require('assert');

describe('Testes de API do ControllerExercicio', function () {
  describe('POST /somar', function () {
    it('somar corretamente dois números positivos', function (done) {
      request(app)
        .post('/somar')
        .send({ num1: 5, num2: 3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 8 });
          done();
        });
    });

    it('lidar com erro ao somar números inválidos', function (done) {
      request(app)
        .post('/somar')
        .send({ num1: 'abc', num2: 3 })
        .expect(500)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { message: "Erro ao somar" });
          done();
        });
    });

    it('lidar com números negativos', function (done) {
      request(app)
        .post('/somar')
        .send({ num1: -5, num2: -3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: -8 });
          done();
        });
    });

    it('lidar com números decimais', function (done) {
      request(app)
        .post('/somar')
        .send({ num1: 3.5, num2: 2.5 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 6 });
          done();
        });
    });
  });

  describe('POST /subtrair', function () {
    it('subtrair corretamente dois números positivos', function (done) {
      request(app)
        .post('/subtrair')
        .send({ num1: 5, num2: 3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 2 });
          done();
        });
    });

    it('lidar com erro ao subtrair números inválidos', function (done) {
      request(app)
        .post('/subtrair')
        .send({ num1: 5, num2: 'xyz' })
        .expect(500)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { message: "Erro ao Subtrair" });
          done();
        });
    });

    it('lidar com números negativos', function (done) {
      request(app)
        .post('/subtrair')
        .send({ num1: -5, num2: -3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: -2 });
          done();
        });
    });

    it('lidar com números decimais', function (done) {
      request(app)
        .post('/subtrair')
        .send({ num1: 3.5, num2: 2.5 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 1 });
          done();
        });
    });
  });

  describe('POST /multiplicar', function () {
    it('multiplicar corretamente dois números positivos', function (done) {
      request(app)
        .post('/multiplicar')
        .send({ num1: 4, num2: 3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 12 });
          done();
        });
    });

    it('lidar com erro ao multiplicar números inválidos', function (done) {
      request(app)
        .post('/multiplicar')
        .send({ num1: 'abc', num2: 3 })
        .expect(500)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { message: "Erro ao Multiplicar" });
          done();
        });
    });

    it('lidar com números negativos', function (done) {
      request(app)
        .post('/multiplicar')
        .send({ num1: -4, num2: -3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 12 });
          done();
        });
    });

    it('lidar com números decimais', function (done) {
      request(app)
        .post('/multiplicar')
        .send({ num1: 2.5, num2: 3 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 7.5 });
          done();
        });
    });
  });

  describe('POST /dividir', function () {
    it('dividir corretamente dois números positivos', function (done) {
      request(app)
        .post('/dividir')
        .send({ num1: 6, num2: 2 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 3 });
          done();
        });
    });

    it('lidar com erro ao dividir por zero', function (done) {
      request(app)
        .post('/dividir')
        .send({ num1: 8, num2: 0 })
        .expect(500)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { message: "Erro ao Dividir" });
          done();
        });
    });

    it('lidar com zero dividido por número positivo', function (done) {
      request(app)
        .post('/dividir')
        .send({ num1: 0, num2: 5 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 0 });
          done();
        });
    });

    it('lidar com números decimais', function (done) {
      request(app)
        .post('/dividir')
        .send({ num1: 7.5, num2: 2.5 })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepStrictEqual(res.body, { result: 3 });
          done();
        });
    });
  });

});
