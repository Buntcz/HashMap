class HashMap {
    constructor(initialCapacity = 16) {
        this.buckets = new Array(initialCapacity);
        this.length = 0;
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode
    }

    set(key, value) {
        const index = this.hash(key);
        if(!this.buckets[index]) {
            this.buckets[index] = []
        }

        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value])
        this.length++
        return bucket;
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if(!bucket) {
            return undefined;
        }
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                return bucket[i][1]
            }
        }
        return undefined
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if(!bucket) {
            return false;
        }
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if(!bucket) {
            return;
        }

        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                bucket.splice(i, 1)
                return;
            }
        }
    }

    length() {
        return this.length
    }

    clear() {
        this.length = 0;
        return (this.buckets = new Array(this.buckets.length))
    }

   keys() {
    let keys = [];
    for(let i = 0; i < this.buckets.length; i++) {
        if(this.buckets[i] !== undefined) {
            keys.push(this.buckets[i].key)
        }
    }
    return keys;
   }
        
}

const hashMap = new HashMap();

console.log(hashMap.set("Carlos", "C"))
console.log(hashMap.set("Cravits", "C"))
console.log(hashMap.get("Cravits"))
console.log(hashMap.has("Carlo"))
console.log(hashMap.length)
console.log(hashMap.keys())

