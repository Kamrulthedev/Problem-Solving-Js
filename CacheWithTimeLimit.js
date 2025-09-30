// Time Limited cache

var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const now = Date.now();
  const exisperdTime = now + duration;
  const existed = false;

  if (this.cache.has(key) && this.cache.get(key).exisperdTime > now) {
    existed = true;
    clearTimeout(this.cache.get(key).timer);
  }

  // New Timer set
  const timer = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, exisperdTime, timer });

  return existed;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();

    if(this.cache.has(key)){
        const entry = this.cache.get(key);
        if(entry.exisperdTime > now){
            return entry.value;
        }
        this.cache.delete(key);
    }
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;

    for(let [key,entry] of this.cache){
        if(entry.exisperdTime > now) count++;
        else this.cache.delete(key);  
    }
    return count;
};
