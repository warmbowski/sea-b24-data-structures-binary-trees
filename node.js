'use strict';
function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function() {
  return this.data + '(' + this.count + ')';
};

module.exports = Node;
