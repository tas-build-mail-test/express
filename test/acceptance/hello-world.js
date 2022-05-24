
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
      var x = Math.round((Math.random()*(30-21) + 20));
      check = isBetween(x, 21, 30);
      assert.equal(check, true, "flaky test failed, generated number is not between 21 and 30");
    })
    it('minute part of current time is odd', function () {
      var today = new Date();
      today = today.getMinutes();
      assert.equal(today%2, 1, "flaky test failed");
    })
    it('random number is between 51 and 60', function () {
      var x = Math.round((Math.random()*(60-51) + 49))
      check = isBetween(x, 51, 60);
      assert.equal(check, true, "flaky test failed, generated number is not between 51 and 60");
    })
  })

  // describe('flaky-test-1', function () {
  //   it('random number is odd', function () {
  //     var x = Math.round((Math.random() + 100))%2
  //     assert.equal(x, 1, "flaky test failed failed, expected: x=1");
  //   })
  //   it('time in seconds', function () {
  //     var today = new Date();
  //     today = today.getSeconds();
  //     assert.equal(today%2, 1, "flaky test failed failed");
  //   })
  // })

  // describe('flaky-test-2', function () {
  //   it('random number is even', function () {
  //     var x = Math.round((Math.random() + 100))%2
  //     assert.equal(x, 0, "flaky test failed failed, expected: x=0");
  //   })
  //   it('time in min', function () {
  //     var today = new Date();
  //     today = today.getMinutes();
  //     assert.equal(today%2, 1, "flaky test failed failed");
  //   })
  // })
  // describe('flaky-test-3', function () {
  //   it('random number is smaller', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var y = Math.round((Math.random() + 100))
  //     var ans = cmp.less(x, y)
  //     expect(ans).toBe(true)
  //   })
  //   it('random number is greater', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var y = Math.round((Math.random() + 100))
  //     var ans = cmp.greater(x, y)
  //     expect(ans).toBe(true)
  //   })
  //   it('random numbers are equal', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var y = Math.round((Math.random() + 100))
  //     assert.equal(x, y, "flaky test failed")
  //   })
  // })
  // describe('flaky-test-4', function () {
  //   it('random number is a multiple of three', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var ans = isMultipleOf.m(x, 3)
  //     expect(ans).toBe(true)
  //   })
  //   it('random number is a multiple of four', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var ans = isMultipleOf.m(x, 4)
  //     expect(ans).toBe(true)
  //   })
  //   it('random number is a multiple of two', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var ans = isMultipleOf.m(x, 2)
  //     expect(ans).toBe(true)
  //   })
  //   it('random number is not a multiple of four', function () {
  //     var x = Math.round((Math.random() + 100))
  //     var ans = isMultipleOf.m(x, 4)
  //     expect(ans).toBe(false)
  //   })
  // })
  // describe('flaky-test-5', function () {
  //   it('current time hour is an aven number', function () {
  //     var today = new Date();
  //     today = today.getHours();
  //     assert.equal(today%2, 0, "flaky test failed failed");
  //   })
  //   it('current date is an odd number', function () {
  //     var today = new Date();
  //     today = today.getDate();
  //     assert.equal(today%2, 1, "flaky test failed failed");
  //   })
  //   it('current month is an odd number', function () {
  //     var today = new Date();
  //     today = today.getMonth();
  //     assert.equal(today%2, 1, "flaky test failed failed");
  //   })
  // })
  // describe('flaky-test-6', function () {
  //   it('milliseconds value of time is odd', function () {
  //     var today = new Date();
  //     today = today.getMilliseconds();
  //     assert.equal(today%2, 0, "flaky test failed failed");
  //   })
  // })
  // describe('flaky-test-7', function () {
  //   it('current seconds value of time is 5', function () {
  //     var today = new Date();
  //     today = today.getSeconds();
  //     assert.equal(today, 5, "flaky test failed failed");
  //   })
  //   it('current hours value of time is 16', function () {
  //     var today = new Date();
  //     today = today.getSeconds();
  //     assert.equal(today, 16, "flaky test failed failed");
  //   })
  // })
  // describe('flaky-test-8', function () {
  //   it('current seconds value of time is multiple of 4', function () {
  //     var today = new Date();
  //     today = today.getSeconds();
  //     assert.equal(today%4, 0, "flaky test failed failed");
  //   })
  //   it('current seconds value of time is not a multiple of 3', function () {
  //     var today = new Date();
  //     today = today.getSeconds()%3;
  //     assert.equal(today, 1, "flaky test failed failed");
  //   })
  //   it('current hours value of time is not a multiple of 3', function () {
  //     var today = new Date();
  //     today = today.getHours()%3;
  //     assert.equal(today, 1, "flaky test failed failed");
  //   })
  // })
  describe('GET /missing', function () {
    it('should respond with 404', function (done) {
      request(app)
        .get('/missing')
        .expect(404, done)
    })
  })
})
