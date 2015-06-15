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
  };

  var body = document.body.childNodes;
  var bodyArr = Array.prototype.slice.call(body);
  return filterElements(className, bodyArr); 
};