/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false; // If the list is empty or has only one node, there's no cycle
    }
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; // If fast or fast.next is null, we've reached the end of the list without a cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true; // If slow and fast pointers meet, there's a cycle
};
