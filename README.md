# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 


## Usage

**Install it:**

`npm install @salma.ibs/lotide`

**Require it:**

`const _ = require('@salma.ibs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

**Version:**
1.0.0

## Documentation

The following functions are currently implemented: NOT COMPLETE,would like to refactor more!

* `assertEqual(actual, expected)`: Allows us to see if two paramteres are exactly the same and console.log an appropriate success or failure message to the console.
* `eqArrays(array1, array2)`: takes two arrays and compares thems for a perfect match
* `assertArraysEqual(actual, expected)`: This function  two arrays and console.log an appropriate success or failure message to the console.
* `head(array)`: This function will retirev the first element, or head, of an array
* `tail(array)`: This function splices the first element of an array and retieves the tail, or all others elements AFTER the head
* `middle(array)`: This function takes an array and retieve the middle numbers, if length on arry is odd it will retrieve the inner most element. If it is an even lengthed, then it will retrive the two middle most elements
* `without(array1, array2)`: This function takes two array, a selection array and a what NOT to keep array. It will return a new array without the elements indidcated in the second.
* `countOnly(allItems, itemsToCount)`: This function will return a new an object with counts of everything that the input object listed.
* `countLetters(string)`: This function will take in a string and return an object with the letters as keys and the number of times they appear in the string
* `letterPositions(string)`: This position returns and object all the letters as keys and the position/indeces of where each character is found in the string as the values.
* `map(array, callback)`: this funtion takes an array and callback. It retrives the first letter of each word in the array and creates a new aray.
* `takeUntil(array, callback)`: This function uses an array and caalback and returns all the elements in a new array until the callback returns a truthy value. (Returns all the poitive numbers in an array until callback finds a negative)
* `eqObjects(Obj1, Obj2)`: This function takes two objects and see is they are identical
* `assertObjectsEqual(actual, expected)`: This function takes two objects and console.log an appropriate success or failure message to the console.
