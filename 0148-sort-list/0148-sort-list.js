/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Merge two sorted linked lists.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const merge = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    } else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
};

/**
 * Find the middle node of a linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
const findMiddle = (head) => {
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (prev) {
        prev.next = null; // Split the list into two halves
    }

    return slow;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head; // Base case: empty list or single node
    }

    const mid = findMiddle(head);
    const left = sortList(head);
    const right = sortList(mid);

    return merge(left, right);
};
