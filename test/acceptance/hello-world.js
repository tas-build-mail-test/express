
var app = require('../../examples/hello-world')
var request = require('supertest')
var assert = require('assert');

describe('hello-world', function () {
  describe('GET /', function () {
    it('should respond with hello world', function (done) {
      request(app)
        .get('/')
        .expect(200, 'Hello World', done)
    })
  })

  describe('flaky-test', function () {
    it('sample-test', function () {
      var x = Math.random()
      assert.equal(x, 0, "flaky test failed failed, expected: x=0");
    })
  })

  describe('GET /missing', function () {
    it('should respond with 404', function (done) {
      request(app)
        .get('/missing')
        .expect(404, done)
    })
  })
})
