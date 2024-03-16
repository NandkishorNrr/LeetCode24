/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let fast=head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    let middle = slow;
    while(middle){
        let nextNode = middle.next;
        middle.next = fast;
        fast= middle;
        middle = nextNode;
    }

    let ans=0;
    let iterator = head;
    while(fast){
        let sum = iterator.val + fast.val;
        ans = Math.max(ans, sum);
        iterator = iterator.next;
        fast=fast.next;
    }
    return ans;
};