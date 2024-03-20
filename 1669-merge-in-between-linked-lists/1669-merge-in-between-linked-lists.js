/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // Find the node before the a-th node
    let beforeA = list1;
    for (let i = 0; i < a - 1; i++) {
        beforeA = beforeA.next;
    }
    
    // Find the b-th node
    let nodeB = beforeA;
    for (let i = 0; i < b - a + 2; i++) {
        nodeB = nodeB.next;
    }
    
    // Find the last node of list2
    let lastList2Node = list2;
    while (lastList2Node.next !== null) {
        lastList2Node = lastList2Node.next;
    }
    
    // Connect beforeA to list2 and list2 to nodeB
    beforeA.next = list2;
    lastList2Node.next = nodeB;
    
    return list1;
};
