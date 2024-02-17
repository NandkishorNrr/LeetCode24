class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown();
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[index]) {
                swapIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[index] && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                swapIndex = rightChildIndex;
            }

            if (swapIndex === null) break;

            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
}

var furthestBuilding = function(heights, bricks, ladders) {
    const minHeap = new MinHeap();
    let i = 0;
    for (; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            minHeap.insert(diff);
            if (minHeap.heap.length > ladders) {
                bricks -= minHeap.remove();
                if (bricks < 0) return i;
            }
        }
    }
    return i;
};
