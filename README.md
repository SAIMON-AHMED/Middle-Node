# Find the Middle Node of a Linked List

This repository contains an implementation of the middleNode function, which finds and returns the middle node of a singly linked list. The function runs in O(n) time complexity and uses O(1) space.

**Problem Description**

Given a singly linked list, the task is to find and return the middle node of the list. If the list has an even number of nodes, the function should return the second middle node.

**Input**

linkedList: A singly linked list represented by the class LinkedList, where:

value: The value of the current node.

next: A reference to the next node in the list (or null if it's the last node).

**Output**

Returns the middle node of the linked list. If the list has an even number of nodes, the second middle node is returned.

**Approach**

The algorithm follows these steps:

**Traversal to Count Nodes:**

Traverse the entire linked list once to count the total number of nodes.

**Find the Middle Node:**

Calculate the middle index as Math.floor(count / 2).

Traverse the linked list again up to the middle node and return it.


Example Usage

	const { LinkedList, middleNode } = require('./middleNode');
	
	// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
	let list = new LinkedList(1);
	list.next = new LinkedList(2);
	list.next.next = new LinkedList(3);
	list.next.next.next = new LinkedList(4);
	list.next.next.next.next = new LinkedList(5);
	
	// Find the middle node
	const middle = middleNode(list);

	// Output: Middle node has the value 3
	console.log(middle.value);
 
**Time and Space Complexity**

Time Complexity: O(n), where n is the number of nodes in the linked list. The function makes two traversals: one for counting the nodes and another to find the middle node.

Space Complexity: O(1), since the function uses a constant amount of extra space regardless of the input size.

**Conclusion**

The middleNode function efficiently finds the middle node of a singly linked list with a time complexity of O(n) and a space complexity of O(1). This solution is optimal for handling large linked lists while minimizing memory usage.
