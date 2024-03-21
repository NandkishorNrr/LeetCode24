var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;

    // Move prev to the node before the left position
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let curr = prev.next;
    let next = null;
    let prevLeft = prev;
    
    // Reverse the nodes between left and right
    for (let i = left; i <= right; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Adjust pointers to reconnect the reversed portion
    prevLeft.next.next = curr;
    prevLeft.next = prev;

    return dummy.next;
};
