const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.res = null
  }

  root() {
    return this.res
  }

  add(data) {
    if(this.res === null){
      this.res = new Node(data)
      return
    }
    const addOne = (node, data) =>{
      if (node.data > data) {
        if (node.left === null) {
          node.left = new Node(data)
        }
        else{
          addOne(node.left, data)
        }
      }
      else{
        if(node.right === null){
          node.right = new Node(data)
        }
        else{
          addOne(node.right, data)
        }
      }
    } 
    addOne(this.res, data)
   }

  has(data) {
    return this.find(data) !== null
  }

  find(data) {
    const finds = (node, data) =>{
      if(node === null ) return null
      if(node.data === data) return node
      if(node.data >= data){
        return finds(node.left, data)
      }
      else{
        return finds(node.right, data)
      }
    }
    return finds(this.res, data)
  }

  remove(data) {
    this.res = rem(this.res, data)

    function rem(n, data){
      if (!n) {
        return null
      }

      else if (n.data < data) {
        n.right = rem(n.right, data);
        return n
      }

      else if (n.data > data){
        n.left = rem(n.left, data)
        return n
      }

      else{ 
        if(!n.left && !n.right) { 
        n = null 
        return n
      }
      if (!n.left){
        return n.right
      }

      if(!n.right){
        return n.left
      }

      let copy = minN(n.right)
      n.data = copy.data
      n.right = rem(n.right, copy.data)
      return n
    }
  }

    function minN(n) {
      return n.left === null ? n : minN(n.left)
    }
  }

  min() {
  let min = this.res
  const _min = (tree) => {
    if (tree.data < min.data)
      min = tree

    if (tree.left === null && tree.right === null) {
      return min.data
    }
    if(tree.left !== null){
      return _min(tree.left)
    }
    else{
      return _min(tree.right)
    }
  }

  return _min(this.res)
  }
  

  max() {
    let max = this.res
    const _max = (tree) => {
      if (tree.data > max.data)
        max = tree
  
      if (tree.left === null && tree.right === null) {
        return max.data
      }
      if(tree.right !== null){
        return _max(tree.right)
      }
      else{
        return _max(tree.left)
      }
    }
  
    return _max(this.res)
}
}

module.exports = {
  BinarySearchTree
};