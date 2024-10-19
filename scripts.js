// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// Time -> O(n) | Space -> O(1) - where n is the number of nodes
function middleNode(linkedList) {

  let cur = linkedList;
  let result = linkedList;
  let count = 0;
  
  while (cur !== null) {
    cur = cur.next;
    count++;
  }
  
  for (let i = 0; i < Math.floor(count/2); i++) {
    result = result.next;
  }
  return result;
}

