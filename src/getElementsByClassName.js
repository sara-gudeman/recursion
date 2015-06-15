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
    var filteredClass = elements.filter(function(element) {
      if (element.classList !== undefined) {
        return element.classList.contains(className);
      }
    });
    hasClass = hasClass.concat(filteredClass);

    var hasChild = elements.filter(function(element) {
      return element.childNodes !== undefined && element.childNodes.length > 0;
    });

    var children = [];
    hasChild.forEach(function(parent) {
      var childArr = Array.prototype.slice.call(parent.childNodes);
      children = children.concat(childArr);
    });

    if (children.length > 0) {
      return filterElements(className, children);
    }
    return hasClass;
  };

  var bodyArr = [];
  bodyArr.push(document.body);
  return filterElements(className, bodyArr); 
};