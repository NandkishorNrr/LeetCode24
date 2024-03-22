var isPalindrome = function(head) {
    // Step 1: Traverse the linked list and store values in an array
    let values = [];
    let currentNode = head;
    while (currentNode !== null) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    // Step 2: Use two pointers to compare values from start and end
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
        if (values[left] !== values[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    return true; // Palindrome
};
