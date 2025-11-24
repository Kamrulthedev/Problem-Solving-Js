// Definition for singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example usage:
const l1 = createLinkedList([2, 4, 3]); // Represents the number 342
const l2 = createLinkedList([5, 6, 4]); // Represents the number 465

const result = addTwoNumbers(l1, l2); // Adds 342 + 465 = 807

console.log(linkedListToArray(result)); // Output: [7, 0, 8]
