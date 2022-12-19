/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = (nums, k) => {
    const map = getFrequencyMap(nums);  
    const bucket = getBucket(nums, map);

    return getTopK(bucket, k);          
};

var getFrequencyMap = (nums, map = new Map()) => {
    for (const num of nums) {
        const count = (map.get(num) || 0) + 1;

        map.set(num, count);     
    }

    return map;
};

const getBucket = (nums, map) => {
    const bucket = new Array(nums.length + 1).fill()
        .map(() => []);

    for (const [ num, count ] of map.entries()) {
        bucket[count].push(num);                     
    }

    return bucket.reverse();                    
};

var getTopK = (bucket, k, topK = []) => {
    for (const count of bucket) {
        for (const num of count) {   
            const isAtCapacity = topK.length === k;
            if (isAtCapacity) break;

            topK.push(num);               
        }
    }

    return topK;
};