'use strict';
function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data + '(' + this.count + ')';
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.countNodes = countNodes; //exercise 1
  this.countEdges = countEdges; //exercise 2
  this.max = findMax; //exercise 3
  this.min = findMin; //exercise 4
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
}

// exercise 1
function countNodes(node) {
  if (node.data === null) {
    return 0;
  } else {
    if (node.left === null && node.right === null) {
      return 1;
    } else {
      return countNodes(node.left) + countNodes(node.right) + 1;
    }
  }
}

// exercise 2 - (thanks for the help Karl G, I guess I was over thinking it.)
function countEdges(node) {
  return countNodes(node) - 1;
}

// exercise 3
function findMin(node) {
  //min is always last leaf node on left
  while (node.left !== null) {
    node = node.left;
  }
  return node.data;
}

// exercise 4
function findMax(node) {
  //max is always last leaf node on right
  while (node.right !== null) {
    node = node.right;
  }
  return node.data;
}

function insert(data) {
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
}

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    process.stdout.write(node.show() + ' ');
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    process.stdout.write(node.show() + ' ');
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    process.stdout.write(node.show() + ' ');
  }
}

module.exports = BST;
