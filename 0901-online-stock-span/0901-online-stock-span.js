var StockSpanner = function() {
    this.stack = []; // Use a stack to store the previous prices and their spans
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1; // Span is at least 1 for the current day
    
    // Pop elements from the stack while the price of the current day is greater than or equal to the price of the top of the stack
    while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1].price) {
        span += this.stack.pop().span; // Add the span of the popped element to the current span
    }
    
    // Push the current price and its span onto the stack
    this.stack.push({ price: price, span: span });
    
    return span; // Return the span for the current day
};

// Example usage:
var obj = new StockSpanner();
console.log(obj.next(100)); // Output: 1
console.log(obj.next(80));  // Output: 1
console.log(obj.next(60));  // Output: 1
console.log(obj.next(70));  // Output: 2
console.log(obj.next(75));  // Output: 4
console.log(obj.next(85));  // Output: 6
