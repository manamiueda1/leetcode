// Depth-first Seatch

class Node {
  constructor(name) {
    this.name = name;
    // 		this.name is the value/name of the current node
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    // 		This.chilren is the array of nodes of current Node
    return this;
    // 		the first time this is called, it is referring to the root node at A
    // 		this is the final Graph
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (let i = 0; i < this.children.length; i++) {
      let currentChild = this.children[i];
      currentChild.depthFirstSearch(array);
    }
    return array;
  }
}
