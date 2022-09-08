/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [2,1,-1];

var pivotIndex = function(nums) {
    
    let leftSum = [];
    let rightSum = [];
    
    let totalSum = nums.reduce((total, value) => {
        return total + value;
    });
    
    for(let i=0; i < nums.length; i++) {
        
        if (i===0) {
        leftSum[i] = 0; 
        } 
        else {
            leftSum[i] = leftSum[i-1] + nums[i-1];  
        }           
        
    }
    
    for (let i=0; i < nums.length; i++) {
    
        rightSum[i] = totalSum - leftSum[i] - nums[i];
        if(leftSum[i] == rightSum[i]) {
            return i;
        } 
        else if(i===nums.length-1){
            return -1;
        }
        
        
    }  
    
    
};

console.log(pivotIndex(nums));