class TimeLimitedCache {
    constructor() {
        this.cache = {};
    }

    set(key, value, duration) {
        const expirationTime = Date.now() + duration;
        if (this.cache[key] && this.cache[key].expirationTime > Date.now()) {
            this.cache[key] = { value, expirationTime };
            return true; // Key already exists and is not expired
        } else {
            this.cache[key] = { value, expirationTime };
            return false; // Key is new or expired
        }
    }

    get(key) {
        if (this.cache[key] && this.cache[key].expirationTime > Date.now()) {
            return this.cache[key].value;
        } else {
            return -1;
        }
    }

    count() {
        let count = 0;
        for (const key in this.cache) {
            if (this.cache[key].expirationTime > Date.now()) {
                count++;
            }
        }
        return count;
    }
}
