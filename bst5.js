'use strict';
var BST = require('./bst');

var countWordOccurances = function(text) {
  var words = new BST();
  var wordArray = text.split(' ');

  wordArray.forEach(function(word) {
    words.insert(word);
  });
  var str = words.listWithCounts(words.root);
  return str.substring(0, str.length - 2);
};

module.exports = countWordOccurances;
