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
* `eqArrays(array1, array2)`: takes two arrays and compares thems for a perfects match
* `assertArraysEqual(...)`: This function  two arrays and console.log an appropriate success or failure message to the console.
* `head(array)`: This function will retirev the first element, or head, of an array
* `tail(array)`: This function splices the first elemtn of an array and retieves the tail, or all elements AFTER the head
* `middle(array)`: This function takes an array and retieve the middle numbers, if odd leneghthed arry will retire the inner most element. If it is an even lengthed array then it will retrive the two middle most elements
* `without(....)`: This function takes two array, a selection array and a what NOT to keep array. It will return a new array without the elements indidcated in the second.
* `countOnly(allItems, itemsToCount)`: This function will return a new an object with counts of everything that the input object listed.
* `function(....)`: description 
* `function(....)`: description
* `function(....)`: description
* `function(....)`: description
* `function(....)`: description
* `function(....)`: description
* `function(....)`: description
* `function(....)`: description