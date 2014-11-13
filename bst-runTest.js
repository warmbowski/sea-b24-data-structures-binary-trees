'use strict';
var BST = require('./bst');

function testBstOutput() {
  var nums = new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);
  //console.log("Inorder traversal: ");

  // nums.inOrder(nums.root);
  // console.log ('<- In: ');
  //
  // nums.postOrder(nums.root);
  // console.log ('<- Post: ');
  //
  // nums.preOrder(nums.root);
  // console.log ('<- Pre: ');

  return 'nodes: ' + nums.countNodes(nums.root) +
  ', edges: ' + nums.countEdges(nums.root) +
  ', min: ' + nums.min(nums.root) +
  ', max: ' + nums.max(nums.root);
}

console.log(testBstOutput());
