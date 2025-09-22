import BaseCache from "./BaseCache.js";

class NumberCache extends BaseCache {

// Hooks 
  beforeSet(key, value) {
    if (typeof value !== "number") {
      console.log("Only numbers allowed!"); // we can use throw new Error
    }
  }

// Hooks
  afterGet(key, value) {
    console.log(`Key ${key} accessed with value: ${value}`);
  }
}
export default NumberCache;

// Test
const cache = new NumberCache();
cache.set("a", 1, 5); // sets 1 for 5 sec
setTimeout(() => {
  console.log(cache.get("a")); // To test after 5s : null
}, 6000);
console.log(cache.get("a")); // 1
cache.set("a", "string", 5); //throws error
