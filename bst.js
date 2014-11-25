'use strict';
var Node = require('./node');
function BST() {
  this.root = null;
}

// exercise 1
BST.prototype.countNodes = function(node) {
  var _this = this;
  if (node.data === null) {
    return 0;
  } else {
    if (node.left === null && node.right === null) {
      return 1;
    } else {
      return _this.countNodes(node.left) + _this.countNodes(node.right) + 1;
    }
  }
};

// exercise 2 - (thanks for the help Karl G, I guess I was over thinking it.)
BST.prototype.countEdges = function(node) {
  var _this = this;
  return _this.countNodes(node) - 1;
};

// exercise 3
BST.prototype.findMin = function(node) {
  //min is always last leaf node on left
  while (node.left !== null) {
    node = node.left;
  }
  return node.data;
};

// exercise 4
BST.prototype.findMax = function(node) {
  //max is always last leaf node on right
  while (node.right !== null) {
    node = node.right;
  }
  return node.data;
};

BST.prototype.find = function(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
};

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        if (current.data === data) {
          current.count++;
          break;
        }
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  var result = '';
  if (node !== null) {
    result += this.inOrder(node.left);
    result += node.data + ' ';
    result += this.inOrder(node.right);
  }
  return result;
};

BST.prototype.preOrder = function(node) {
  var result = '';
  if (node !== null) {
    result += node.data + ' ';
    result += this.preOrder(node.left);
    result += this.preOrder(node.right);
  }
  return result;
};

BST.prototype.postOrder = function(node) {
  var result = '';
  if (node !== null) {
    result += this.postOrder(node.left);
    result += this.postOrder(node.right);
    result += node.data + ' ';
  }
  return result;
};

BST.prototype.listWithCounts = function(node) {
  var result = '';
  if (node !== null) {
    result += this.listWithCounts(node.left);
    result += node.data + ': ' + node.count + ', ';
    result += this.listWithCounts(node.right);
  }
  return result;
};

module.exports = BST;
