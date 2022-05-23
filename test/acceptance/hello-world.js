
var app = require('../../examples/hello-world')
var request = require('supertest')
var assert = require('assert');
const { expect } = require('chai');
const {cmp, isMultipleOf} = require('./flaky-test-utils')

describe('hello-world', function () {
  describe('GET /', function () {
    it('should respond with hello world', function (done) {
      request(app)
        .get('/')
        .expect(200, 'Hello World', done)
    })
  })

  describe('flaky-test-1', function () {
    it('random number is odd', function () {
      var x = Math.round((Math.random() + 100))%2
      assert.equal(x, 1, "flaky test failed failed, expected: x=1");
    })
    it('time in seconds', function () {
      var today = new Date();
      today = today.getSeconds();
      assert.equal(today%2, 1, "flaky test failed failed");
    })
  })

  describe('flaky-test-2', function () {
    it('random number is even', function () {
      var x = Math.round((Math.random() + 100))%2
      assert.equal(x, 0, "flaky test failed failed, expected: x=0");
    })
    it('time in min', function () {
      var today = new Date();
      today = today.getMinutes();
      assert.equal(today%2, 1, "flaky test failed failed");
    })
  })
  describe('flaky-test-3', function () {
    it('random number is smaller', function () {
      var x = Math.round((Math.random() + 100))
      var y = Math.round((Math.random() + 100))
      var ans = cmp.less(x, y)
      expect(ans).toBe(true)
    })
    it('random number is greater', function () {
      var x = Math.round((Math.random() + 100))
      var y = Math.round((Math.random() + 100))
      var ans = cmp.greater(x, y)
      expect(ans).toBe(true)
    })
    it('random numbers are equal', function () {
      var x = Math.round((Math.random() + 100))
      var y = Math.round((Math.random() + 100))
      assert.equal(x, y, "flaky test failed")
    })
  })
  describe('flaky-test-4', function () {
    it('random number is a multiple of three', function () {
      var x = Math.round((Math.random() + 100))
      var ans = isMultipleOf.m(x, 3)
      expect(ans).toBe(true)
    })
    it('random number is a multiple of four', function () {
      var x = Math.round((Math.random() + 100))
      var ans = isMultipleOf.m(x, 4)
      expect(ans).toBe(true)
    })
    it('random number is a multiple of two', function () {
      var x = Math.round((Math.random() + 100))
      var ans = isMultipleOf.m(x, 2)
      expect(ans).toBe(true)
    })
    it('random number is not a multiple of four', function () {
      var x = Math.round((Math.random() + 100))
      var ans = isMultipleOf.m(x, 4)
      expect(ans).toBe(false)
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
