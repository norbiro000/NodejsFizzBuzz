'use strict'

var mocha = require('mocha')
var assert = require('assert')

var fizzbuzz = require('../fizzbuzz')

describe('FizzBuzz', function () {
    describe('Send 1' ,function () {
        it('Should return 1', function () {
            assert.equal(1, fizzbuzz(1))
        })
        it('Should return 2', function () {
            assert.equal(2, fizzbuzz(2))
        })
        it('Should return 3', function () {
            assert.equal('fizz', fizzbuzz(3))
        })
        it('Should return 4', function () {
            assert.equal(4, fizzbuzz(4))
        })
        it('Should return 5', function () {
            assert.equal('buzz', fizzbuzz(5))
        })
        it('Should return 6', function () {
            assert.equal('fizz', fizzbuzz(6))
        })
        it('Should return 7', function () {
            assert.equal(7, fizzbuzz(7))
        })
        it('Should return 8', function () {
            assert.equal(8, fizzbuzz(8))
        })
        it('Should return 9', function () {
            assert.equal('fizz', fizzbuzz(9))
        })
        it('Should return 10', function () {
            assert.equal('buzz', fizzbuzz(10))
        })
        it('Should return 11', function () {
            assert.equal(11, fizzbuzz(11))
        })
        it('Should return 12', function () {
            assert.equal('fizz', fizzbuzz(12))
        })
        it('Should return 13', function () {
            assert.equal(13, fizzbuzz(13))
        })
        it('Should return 14', function () {
            assert.equal(14, fizzbuzz(14))
        })
        it('Should return 15', function () {
            assert.equal('fizz buzz', fizzbuzz(15))
        })
    })
    
})