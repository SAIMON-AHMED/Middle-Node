// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time -> O(n) | Space -> O(1) where n is the number of nodes
function middleNode(linkedList) {

  let slowNode = linkedList;
  let fastNode = linkedList;

  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  
  return slowNode;
}
