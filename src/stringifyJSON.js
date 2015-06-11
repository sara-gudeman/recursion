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
    return '"' + obj + '"';
  }
  // boolean or number
  if (typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString();
  }
  if (obj === null) {
    return "null";
  }
  if (obj instanceof Number || obj instanceof String || obj instanceof Boolean) {
    return '"' + obj.valueOf() + '"';
  }
  // object
  if (typeof obj === "object" && Array.isArray(obj) === false) {
    var objArr = [];
    for (var key in obj) {
      // TO DO: generalize to larger fcn
      if (obj[key] === undefined || typeof obj[key] === "symbol" || typeof obj[key] === "function") {
        continue;
      }
      var keyStr = stringifyJSON(key);
      var valStr = stringifyJSON(obj[key]);
      objArr.push(keyStr + ":" + valStr);
    }
    objArr.join();
    return "{" + objArr + "}";
  }
  // array
  if (Array.isArray(obj)) {
    var strArr = [];
    for (var i = 0; i < obj.length; i++) {
      // TO DO: generalize to larger fcn
      if (obj[i] === undefined || typeof obj[i] === "symbol" || typeof obj[i] === "function") {
        strArr.push("null");
      } else {
        var strVal = stringifyJSON(obj[i]);
        strArr.push(strVal);
      }
    }
    return "[" + strArr.join() + "]";
  }
  // TO DO: deal w/ null, undefined, fcn, and symbol values
  // null
  // undefined
};

// console.log(stringifyJSON("hello"));
// console.log(stringifyJSON(new String("hello")));
// console.log(stringifyJSON([1, function() {return;}]));
// console.log(stringifyJSON({a: 1, b: 2, c: "hello", d: undefined}));
// console.log(stringifyJSON([{a: 1, b: 2, c: "hello", d: undefined}]));
// console.log(stringifyJSON([1, 2, 3, "hello", undefined]));
// console.log(stringifyJSON({}));
// console.log(stringifyJSON(2));
// console.log(stringifyJSON(true));
