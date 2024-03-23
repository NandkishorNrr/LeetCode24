class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key-value map
    this.head = new ListNode(); // dummy head node
    this.tail = new ListNode(); // dummy tail node
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

// Move a node to the head of the list
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addNodeToHead(node);
};

// Add a node to the head of the list
LRUCache.prototype.addNodeToHead = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
};

// Remove a node from the list
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this.moveToHead(node);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        node.val = value;
        this.moveToHead(node);
    } else {
        const newNode = new ListNode(key, value);
        this.map.set(key, newNode);
        this.addNodeToHead(newNode);

        if (this.map.size > this.capacity) {
            const tail = this.tail.prev;
            this.removeNode(tail);
            this.map.delete(tail.key);
        }
    }
};


