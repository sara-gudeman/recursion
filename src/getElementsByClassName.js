// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// from bookstrap:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className){
  var nodeArr = [];
  var searchParent = function(className, parent) {
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
      // console.log(children[i]);
      if (children[i].classList !== undefined) {
        // console.log(children[i].classList);
        // console.log(children[i].classList.contains(className));
      }
      // console.log(children[i].childNodes.length > 0);
      if (children[i].childNodes.length > 0) {
        console.log("recursed");
        return searchParent(className, children[i]);
      }
    }
  }
  searchParent(className, document.body);
  return nodeArr;
};

// Goal: return all elements containing class name
// input: class name
// output: array of children containing class name
// process:
// search parent container (initially document)
// iterate over nodes in parent
// --if node contains class name: push to array
// --if node contains children, search child nodes for class (recursive step)
// --if no more nodes: return array