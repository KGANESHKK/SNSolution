import BaseCache from "./BaseCache.js";

class NumberCache extends BaseCache {
  beforeSet(key, value) {
    if (typeof value !== "number") {
      console.log("Only numbers allowed!"); // we can use throw new Error
    }
  }

  afterGet(key, value) {
    console.log(`Key ${key} accessed with value: ${value}`);
  }
}
export default NumberCache;

// Test
const cache = new NumberCache();
cache.set("a", 1, 5); // gives 1
setTimeout(() => {
  console.log(cache.get("a")); // null (after 5s)
}, 6000);
console.log(cache.get("a"));
cache.set("a", "string", 5); //throws error
