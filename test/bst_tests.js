'use strict';

//var rootPath = require('app-root-path');
var expect = require('chai').expect;
var Node = require('../node')
var BST = require('../bst');
var testBstOutput = require('../bst1to4')
var countWordOccurrences = require('../bst5');

describe('BST tests', function() {

  var bst;

  beforeEach(function() {
    bst = new BST();
  });

  it('can instantiate a new BST', function() {
    expect(bst).to.be.an.instanceof(BST);
  });

  it('can insert a node', function () {
    bst.insert('5');
    expect(bst.root).to.have.property('data');
  });
  
  it('can perform an in-order traversal', function() {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(8);
    expect(bst.inOrder(bst.root)).to.equal('1 3 5 7 8 ');
  });
  
  it('can perform a pre-order traversal', function() {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(8);
    expect(bst.preOrder(bst.root)).to.equal('5 3 1 7 8 ');
  });
  
  it('can perform a post-order traversal', function() {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(8);
    expect(bst.postOrder(bst.root)).to.equal('1 3 8 7 5 ');
  });
});

describe('Returning counts, min, and max', function() {
  var nums = new BST();
  before(function() {
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
  });

  it('returns the node count, edge count, min, and max of a tree', function() {
    expect(testBstOutput(nums)).to.eql('nodes: 7, edges: 6, min: 3, max: 99')
  });
});

describe('Returning the occurence of words in a sentence', function() {
  var txt = 'lorem ipsom whatever whatever hello world';

  it('should get the occurrences of each word', function() {
    expect(countWordOccurrences(txt)).to.eql('hello: 1, ipsom: 1, lorem: 1, whatever: 2, world: 1');
  });
});