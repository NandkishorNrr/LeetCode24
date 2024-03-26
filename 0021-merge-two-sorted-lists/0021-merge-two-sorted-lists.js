/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to simplify code
    let dummy = new ListNode(0);
    let current = dummy;

    // Traverse both lists simultaneously
    while (list1 !== null && list2 !== null) {
        // Compare values of current nodes in both lists
        if (list1.val < list2.val) {
            // Append smaller node to the merged list
            current.next = list1;
            // Move to the next node in list1
            list1 = list1.next;
        } else {
            // Append smaller node to the merged list
            current.next = list2;
            // Move to the next node in list2
            list2 = list2.next;
        }
        // Move to the next node in the merged list
        current = current.next;
    }

    // Append the remaining nodes from list1 or list2
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list starting from the first non-dummy node
    return dummy.next;
};
