"use strict";



const randomBoolean = Boolean(Math.round(Math.random()))
const randomNumber = Math.ceil(Math.random() * 100)


//Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function')
//     })
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string")
//     })
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!")
//     })
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined)
//     })
// });

//Unit test for the sayHello function

// describe("sayhello", function (){
//
//
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe("function")
//
//     })
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string")
//     })
//     it('should return the string "Hello, Jane" when executed with "Jane" as an argument ', function () {
//         expect(sayHello("Jane")).toBe("Hello, Jane")
//     })
//     it('should return the string "Hello, Alex" when executed with "Alex" as an argument', function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex")
//     })
//     it('should return the string "Hello, Pat" when executed with "Pat" as an argument', function () {
//         expect(sayHello("Pat")).toBe("Hello, Pat")
//     })
//     it('should return the string "Hello, World" when executed', function() {
//        expect(sayHello()).toBe("Hello, World")
//     })
//     it("should never return 'undefined' when called", function() {
//        expect(sayHello()).not.toBe(undefined)
//     })
//     it('should return the string "Hello, World" when executed with true as an argument', function () {
//         expect(sayHello(true)).toBe("Hello, World")
//     })
//     it('should return the string "Hello, World" when executed with false as an argument', function () {
//         expect(sayHello(false)).toBe("Hello, World")
//     })
// })


// describe("isFive", function (){
//     it('should be a defined function', function () {
//         expect(typeof isFive).toBe("function")
//     })
//     it("should never return 'undefined' when called", function() {
//         expect(isFive()).not.toBe(undefined)
//     })
//     it('should return a boolean value when passed any number', () => {
//         expect(typeof isFive(randomNumber)).toBe('boolean');
//     })
//     it('should return true when passed 5', () => {
//         expect(isFive(5)).toBe(true)
//     })
//     it('should return true when passed the string "5"', () => {
//         expect(isFive("5")).toBe(true)
//     })
// })
//
//
//
// describe('isEven', function()  {
//     it('should be a defined function', function (){
//         expect(typeof isEven).toBe('function')
//     })
//     it('should return a boolean value when passed any number', function()  {
//         expect(typeof isEven(randomNumber)).toBe('boolean')
//      })
//     it('should return true when passed 2', function ()  {
//         expect(isEven(2)).toBe(true)
//     })
//     it('should return true when passed -4', function()  {
//         expect(isEven(-4)).toBe(true)
//     })
//     it('should return false when passed the number 3', function()  {
//         expect(isEven(3)).toBe(false)
//     })
//     it('should return false when passed a non-numeric string like "banana"', function()  {
//         expect(isEven("banana")).toBe(false)
//     })
//     it('should return true when passed "8"', function()  {
//         expect(isEven("8")).toBe(true)
//     })
//     it('should return true when passed 0', function ()  {
//         expect(isEven(Infinity)).toBe(false)
//     })
//     it('should return false when passed the boolean input isEven(true) or isEven(false)', function() {
//         expect(isEven(true)).toBe(false)
//     })
//     it('should return false when called wihout an argument', function () {
//         expect(isEven()).toBe(false)
//     })
// });

  describe(`isVowel`, function(){
      it('should be a defined function', function (){
        expect(typeof isVowel).toBe('function');
      })
      it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true)
      });
      it('should return true when passed "A"', function () {
          expect(isVowel("A")).toBe(true)
      });

  })
