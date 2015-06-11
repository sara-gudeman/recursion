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
  if (typeof obj === "string") {
    return "'" + obj + "'";
  }
  // boolean or number
  if (typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString();
  }
  // object
  // null
  // undefined
};

var testObj = {a: 1, b: 2, c: "hello"};
var objArr = [];
for (var key in testObj) {
  var keyStr = stringifyJSON(key);
  var valStr = stringifyJSON(testObj[key]);
  objArr.push(keyStr + ":" + valStr);
  // console.log(objArr);
};
console.log("{" + objArr.join() + "}");

console.log(stringifyJSON("hello"));
// console.log(stringifyJSON({a: 1, b: 2}));
console.log(stringifyJSON(2));
console.log(stringifyJSON(true));
