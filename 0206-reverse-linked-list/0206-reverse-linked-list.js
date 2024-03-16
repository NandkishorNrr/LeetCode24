/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head; // Base case: return head if it's null or the last node
    }

    // Recursively reverse the rest of the list after head
    const reversedList = reverseList(head.next);
    head.next.next = head; // Reverse the pointer
    head.next = null; // Set the next of the current head to null

    return reversedList; // Return the new head of the reversed list
};
