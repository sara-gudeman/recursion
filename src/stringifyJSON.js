// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// INPUT: collection
// OUTPUT: JSON string
// process:
// take in collection
// if values, return stringified values
// if nested collection, repeat fcn with new collection
// ultimately: return all stringified values
var stringifyJSON = function(obj) {
  // 7 data types: 6 primitives + object
  // string
  // boolean
  // number
  // null
  // undefined
  // object
};