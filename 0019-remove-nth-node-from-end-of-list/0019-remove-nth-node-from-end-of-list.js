var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases when removing the head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let first = dummy;
    let second = dummy;
    
    // Move the first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers together until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the nth node from the end
    second.next = second.next.next;
    
    return dummy.next; // Return the modified head
};
