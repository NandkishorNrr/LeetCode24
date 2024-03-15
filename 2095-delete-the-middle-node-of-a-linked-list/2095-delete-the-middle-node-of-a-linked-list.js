var deleteMiddle = function(head) {
    if (!head || !head.next) {
        // If the list is empty or contains only one node, return null
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    // Move fast pointer twice as fast as the slow pointer
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // At this point, slow is pointing to the middle node
    // Delete the middle node by skipping it
    prev.next = slow.next;

    return head;
};
