/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next) {
        // If the list is empty or contains only one node, no rearrangement needed
        return head;
    }

    let oddHead = head; // Head of the list containing odd-indexed nodes
    let evenHead = head.next; // Head of the list containing even-indexed nodes
    let oddTail = oddHead; // Tail of the list containing odd-indexed nodes
    let evenTail = evenHead; // Tail of the list containing even-indexed nodes
    let currentNode = evenHead.next; // Start from the node after the second node

    let isOdd = true; // Flag to indicate if the current node should be added to the odd or even list

    while (currentNode) {
        // Move the current node to its respective list based on the isOdd flag
        if (isOdd) {
            oddTail.next = currentNode;
            oddTail = oddTail.next;
        } else {
            evenTail.next = currentNode;
            evenTail = evenTail.next;
        }

        // Toggle the isOdd flag
        isOdd = !isOdd;

        // Move to the next node
        currentNode = currentNode.next;
    }

    // Connect the odd and even lists
    oddTail.next = evenHead;
    // Set the next of the last node in the even list to null to mark the end of the list
    evenTail.next = null;

    // Return the head of the rearranged list
    return oddHead;
};
