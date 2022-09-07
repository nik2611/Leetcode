/**
 * @param {number[]} nums
 * @return {number[]}
 */

var nums = [5, 6, 9, 3, 2];




var runningSum = function(nums) {
    
    let number = [];
    for(i=0; i< nums.length; i++) {
        
        if (i===0) {
        number[i] = nums[i];    
        }
        
        else{
        number[i] = number[i-1] + nums[i];
        }
    }
    
    return number;
    
};
    
        
console.log(runningSum(nums));
        

