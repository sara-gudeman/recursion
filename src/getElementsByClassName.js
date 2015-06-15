// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// from bookstrap:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className){
  var hasClass = [];
  // inner fcn takes in class name & DOM nodes (array) to be searched
  var filterElements = function(className, elements) {
    // filter elements that contain className
    var filteredClass = elements.filter(function(element) {
      if (element.classList !== undefined) {
        return element.classList.contains(className);
      }
    });
    // store new elements w/className
    hasClass = hasClass.concat(filteredClass);

    // check current nodes for child nodes to search
    var hasChild = elements.filter(function(element) {
      return element.childNodes !== undefined && element.childNodes.length > 0;
    });

    // each parent node may contain multiple children
    // must store each child in array
    var children = [];
    hasChild.forEach(function(parent) {
      var childArr = Array.prototype.slice.call(parent.childNodes);
      children = children.concat(childArr);
    });

    // if children exist, search child nodes--recursion
    if (children.length > 0) {
      return filterElements(className, children);
    }
    // else, return hasClass array
    return hasClass;
  };

  var bodyArr = [];
  bodyArr.push(document.body);
  return filterElements(className, bodyArr); 
};