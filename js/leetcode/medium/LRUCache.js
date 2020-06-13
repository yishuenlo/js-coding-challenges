//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/531/week-4/3309/

let LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
}

LRUCache.prototype.get = function(key){
    //if no key, return -1
    if(!this.cache.has(key)) return -1;

    //reset key order 
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
}

LRUCache.prototype.put = function(key, value){
    //if key exist, delete key
    this.cache.delete(key);

    //set new value
    this.cache.set(key, value);

    //if cache size greater than capacity
    //delete the first value
    if(this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value);
}