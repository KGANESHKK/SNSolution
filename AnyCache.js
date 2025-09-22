import BaseCache from './BaseCache.js';

class AnyCache extends BaseCache {
  // no validate method
}


const cache = new AnyCache();

cache.set("a", "1",5); 
cache.set("b", 1); 
console.log(cache.get("a")); 
setTimeout(() => {
    console.log(cache.get("a")); // null (after 5s)
}, 6000);
console.log(cache.get("b"));
