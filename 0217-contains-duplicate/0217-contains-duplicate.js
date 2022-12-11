/**
 * @param {number[]} nums
 * @return {boolean}
  */

nums = [1,2,3,1]
var containsDuplicate = function(nums) {
    
    const mySet = new Set(nums);
    
    if(mySet.size !== nums.length) return true;
    else return false;
     
    
};