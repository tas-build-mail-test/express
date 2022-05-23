
var app = require('../../examples/hello-world')
var request = require('supertest')

describe('hello-world', function () {
  describe('GET /', function () {
    it('should respond with hello world', function (done) {
      request(app)
        .get('/')
        .expect(200, 'Hello World', done)
    })
  })

  describe('test', function () {
    it('sample-test', function () {
      assert.equal([1, 2, 3].indexOf(3), 3);
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
