'use strict';
var BST = require('./bst');

function countWordOccurances(text) {
  var words = new BST();
  var wordArray = text.split(' ');

  wordArray.forEach(function(word) {
    words.insert(word);
  });
  //console.log (words);
  words.inOrder(words.root);
}

countWordOccurances('lorem ipsom whatever whatever hello there world');
