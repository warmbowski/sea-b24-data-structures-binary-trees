'use strict';
var BST = require('./bst');

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

var testBstOutput = function(tree) {

  return 'nodes: ' + tree.countNodes(nums.root) +
  ', edges: ' + tree.countEdges(nums.root) +
  ', min: ' + tree.findMin(nums.root) +
  ', max: ' + tree.findMax(nums.root);
};

module.exports = testBstOutput;
