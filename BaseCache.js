/*
 An abstract in-memory key-value cache with optional TTL (time-to-live) support.
 Subclasses can optionally implement hooks to customize behavior such as validation or logging.
 * ## Modularization
 * This class is written as an ES Module, so it can be imported into other files.
*/
class BaseCache {

    constructor() {
        if (new.target === BaseCache) {
            throw new Error("Cannot instantiate abstract class!");
        }
        this.store = new Map();
    }

    set(key, value, ttl = null) {

        // Optional validation hook
        if (typeof this.beforeSet === "function") {
            this.beforeSet(key, value);
        }

        const expiry = ttl ? Date.now() + ttl * 1000 : null;
        this.store.set(key, { value, expiry });
    }

    get(key) {
        const entry = this.store.get(key);
        if (!entry) return null;

        const { value, expiry } = entry;
        if (expiry && Date.now() > expiry) {
            this.store.delete(key);
            return null;
        }

        // Optional afterGet hook
        if (typeof this.afterGet === "function") {
            this.afterGet(key, value);
        }


        return value;
    }

}

// Export the class
export default BaseCache;
