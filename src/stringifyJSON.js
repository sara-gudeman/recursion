// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// INPUT: collection
// OUTPUT: JSON string
var stringifyJSON = function(obj) {
};

// Description
// JSON.stringify() converts a value to JSON notation representing it:

// 1. Properties of non-array objects are not guaranteed to be stringified in
// any particular order. Do not rely on ordering of properties within the same
// object within the stringification.

// 2. Boolean, Number, and String objects are converted to the corresponding
// primitive values during stringification, in accord with the traditional
// conversion semantics.

// 3. If undefined, a function, or a symbol is encountered during conversion it
// is either omitted (when it is found in an object) or censored to null
// (when it is found in an array).

// 4. All symbol-keyed properties will be completely ignored, even when using
// the replacer function.

// 5. Non-enumerable properties will be ignored