const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**

 * Implement simple binary search tree according to task description
 * using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor() {
    this.root = null;
    
  }
  root() {
    
    return this.root;
  }

  add(data) {
    this.root = addWithin(this.root, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
      searchWithin(node.left, data) : 
      searchWithin(node.right, data);
    }
  }

  find(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
      searchWithin(node.left, data) : 
      searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        
        if (!node.left && !node.right) {
          
          return null;
        }

        if (!node.left) {
         
          node = node.right;
          return node;
        }

        if (!node.right) {
          
          node = node.left;
          return node;
        }

        
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}

// const tree = new BinarySearchTree();

// tree.add(3);

// tree.add(2);

// tree.add(1);

// tree.add(4);

// tree.add(5);

// console.log(tree)

// console.log(tree.root().data);

// console.log(tree.min()); 

// console.log(tree.max());

// console.log(tree.remove(5));

// console.log(tree.has(5)); 

// console.log(tree.max()); 

// console.log(tree.find(4))

module.exports = {
  BinarySearchTree
};