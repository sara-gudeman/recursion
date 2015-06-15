// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// from bookstrap:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className){
  var hasClass = [];
  // inner fcn takes in class name & DOM nodes to be searched
  var filterElements = function(className, elements) {
  };
  // process:
  // search parent container (initially document)
  // iterate over nodes in parent
  // --if node contains class name: push to array
  // --if node contains children, search child nodes for class (recursive step)
  // --if no more nodes: return array
  var body = document.body;
  return filterElements(className, body); 
};