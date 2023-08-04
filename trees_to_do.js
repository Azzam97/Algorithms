class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(root, val) {
    let new_node = new Node(val);
    if (this.root == null) {
      this.root = new_node;
      return this;
    } else {
      if (val < root.value && root.left != null) {
        return this.add(root.left, val);
      } else if (val < root.value && root.left == null) {
        root.left = new_node;
        return this;
      }
      if (val > root.value && root.right != null) {
        return this.add(root.right, val);
      } else if (val > root.value && root.right == null) {
        root.right = new_node;
      }
    }
  }
  contains(root, val) {
    if (root == null) {
      return console.log(false);
    } else {
      if (root.value == val) {
        return console.log(true);
      } else if (root.value != val) {
        if (root.value > val) {
          return this.contains(root.left, val);
        } else {
          return this.contains(root.right, val);
        }
      }
    }
  }
  min(root) {
    if (root == null) {
      return console.log("no tree");
    } else {
      if (root.left == null) {
        return console.log(root.value);
      } else {
        return this.min(root.left);
      }
    }
  }
  max(root) {
    if (root == null) {
      return console.log("no tree");
    } else {
      if (root.right == null) {
        return console.log(root.value);
      } else {
        return this.max(root.right);
      }
    }
  }
  size(root) {
    if (this.root == null) {
      return console.log("no tree");
    } else {
      if (root == null) {
        return 0;
      } else {
        return this.size(root.left) + 1 + this.size(root.right);
      }
    }
  }
  isEmpty() {
    if (this.root == null){
        return console.log("empty")
    }
    else{
        return console.log("tree does exist")
    }
  }
}

var tree = new BST();
tree.add(tree.root, 30);
tree.add(tree.root, 20);
tree.add(tree.root, 60);
tree.add(tree.root, 50);
tree.add(tree.root, 10);
tree.add(tree.root, 70);
tree.add(tree.root, 5);
tree.add(tree.root, 8);
tree.contains(tree.root, 50);
tree.min(tree.root);
tree.max(tree.root);
console.log(tree.size(tree.root));
tree.isEmpty()