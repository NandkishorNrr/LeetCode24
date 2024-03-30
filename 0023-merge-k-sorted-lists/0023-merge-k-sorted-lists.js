/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Define a priority queue (min heap)
    class PriorityQueue {
        constructor() {
            this.heap = [];
        }
        
        enqueue(node) {
            this.heap.push(node);
            this.bubbleUp(this.heap.length - 1);
        }
        
        bubbleUp(index) {
            let current = index;
            let parent = Math.floor((current - 1) / 2);
            while (current > 0 && this.heap[current].val < this.heap[parent].val) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor((current - 1) / 2);
            }
        }
        
        dequeue() {
            if (this.isEmpty()) return null;
            if (this.heap.length === 1) return this.heap.pop();
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);
            return min;
        }
        
        bubbleDown(index) {
            let current = index;
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = current;
            
            if (leftChild < this.heap.length && this.heap[leftChild].val < this.heap[smallest].val) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild].val < this.heap[smallest].val) {
                smallest = rightChild;
            }
            if (smallest !== current) {
                [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
                this.bubbleDown(smallest);
            }
        }
        
        isEmpty() {
            return this.heap.length === 0;
        }
    }
    
    // Create a new linked list to store the merged result
    let dummy = new ListNode(0);
    let current = dummy;
    
    // Initialize the priority queue
    let pq = new PriorityQueue();
    
    // Add the heads of all lists to the priority queue
    for (let list of lists) {
        if (list) pq.enqueue(list);
    }
    
    // Merge the lists
    while (!pq.isEmpty()) {
        let min = pq.dequeue();
        current.next = min;
        current = current.next;
        if (min.next) pq.enqueue(min.next);
    }
    
    return dummy.next;
};
