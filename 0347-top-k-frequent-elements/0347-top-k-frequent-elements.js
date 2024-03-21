var topKFrequent = function(nums, k) {
    // Step 1: Count frequency of each number using a hashmap
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, frequencyMap.get(num) + 1 || 1);
    }

    // Step 2: Build a min-heap to keep track of the k most frequent numbers
    const minHeap = new Heap((a, b) => frequencyMap.get(a) - frequencyMap.get(b));

    // Step 3: Insert elements into the min-heap until it contains k elements
    for (const num of frequencyMap.keys()) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    // Step 4: Return the k most frequent numbers from the min-heap
    const result = [];
    while (minHeap.size() > 0) {
        result.unshift(minHeap.pop());
    }
    return result;
};

class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() {
        return this.data.length;
    }

    push(val) {
        this.data.push(val);
        this.bubbleUp(this.size() - 1);
    }

    pop() {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.data.pop();
        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return root;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.data[index], this.data[parentIndex]) >= 0) break;
            [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;
            if (leftChildIndex < this.size() && this.compare(this.data[leftChildIndex], this.data[smallestChildIndex]) < 0) {
                smallestChildIndex = leftChildIndex;
            }
            if (rightChildIndex < this.size() && this.compare(this.data[rightChildIndex], this.data[smallestChildIndex]) < 0) {
                smallestChildIndex = rightChildIndex;
            }
            if (smallestChildIndex === index) break;
            [this.data[index], this.data[smallestChildIndex]] = [this.data[smallestChildIndex], this.data[index]];
            index = smallestChildIndex;
        }
    }
}
