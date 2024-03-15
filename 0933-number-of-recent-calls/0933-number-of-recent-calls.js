var RecentCounter = function() {
    this.requests = [];
};

RecentCounter.prototype.ping = function(t) {
    // Remove requests older than 3000 milliseconds
    while (this.requests.length && this.requests[0] < t - 3000) {
        this.requests.shift();
    }
    // Add current request timestamp
    this.requests.push(t);
    // Return the count of recent requests
    return this.requests.length;
};
