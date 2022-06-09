
var app = require('../../examples/hello-world')
var request = require('supertest')
var assert = require('assert');
const { expect } = require('chai');
const {cmp, isMultipleOf, isBetween} = require('./flaky-test-utils')

describe('hello-world', function () {
  describe('GET /', function () {
    it('should respond with hello world', function (done) {
      request(app)
        .get('/')
        .expect(200, 'Hello World', done)
    })
  })

  
  describe('flaky-test-1', function () {
    it('random number is between 21 and 30', function () {
      var x = Math.round((Math.random()*(30-21) + 19));
      check = isBetween(x, 21, 30);
      assert.equal(check, true, "flaky test failed, generated number is not between 21 and 30");
    })
    it('seconds part of current time is between 1 and 50', function () {
      var today = new Date();
      todaySec = today.getSeconds();
      check = isBetween(todaySec, 1, 50)
      assert.equal(check, true, "flaky test failed");
    })
    it('current month is even', function () {
      var today = new Date();
      today = today.getMonth();  // count start from 0
      assert.equal(today%2, 0, "flaky test failed");
    })
    it('random number is between 51 and 60', function () {
      var x = Math.round((Math.random()*(60-51) + 49))
      check = isBetween(x, 51, 60);
      assert.equal(check, true, "flaky test failed, generated number is not between 51 and 60");
    })
  })
// comment
  describe('additional tests, these should always pass (non-flaky)', function () {
    it('check isBetween function, random number is between 21 and 30', function () {
      var x = Math.round((Math.random()*(30-21) + 21));
      check = isBetween(x, 21, 30);
      assert.equal(check, true, "test failed, generated number is not between 21 and 30");
    })
    it('random number is between 51 and 60', function () {
      var x = Math.round((Math.random()*(60-51) + 51))
      check = isBetween(x, 51, 60);
      assert.equal(check, true, "test failed, generated number is not between 51 and 60");
    })
    it('check cmp.greater() function, one random number is greater than the other', function () {
      var x = Math.round((Math.random()*(60-51) + 51))
      var y = Math.round((Math.random()*(30-21) + 21))
      check = cmp.greater(x, y)
      assert.equal(check, true, "test failed");
    })
    it('check cmp.smaller() function, one random number is smaller than the other', function () {
      var x = Math.round((Math.random()*(60-51) + 51))
      var y = Math.round((Math.random()*(30-21) + 21))
      check = cmp.smaller(y, x)
      assert.equal(check, true, "test failed");
    })
    it('check isMultipleOf function', function () {
      var x = 100
      check = isMultipleOf.m(100, 4)
      assert.equal(check, true, "test failed");
    })
    it('check isMultipleOf function for a falsy case', function () {
      var x = 100
      check = isMultipleOf.m(0, 4)
      assert.equal(check, false, "test failed");
    })
    it('2. check isMultipleOf function for a falsy case', function () {
      check = isMultipleOf.m(205, 4)
      assert.equal(check, false, "test failed");
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
