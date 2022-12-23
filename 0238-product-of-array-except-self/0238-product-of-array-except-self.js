/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = (nums) => {
    const products = 2;
    const [ leftProduct, rightProduct ] = getProducts(products, nums);

    carryForward(nums, leftProduct);                         
    carryBackward(nums, rightProduct);                       

    return combineProducts(nums, leftProduct, rightProduct); 
}

const getProducts = (products, nums) => new Array(products).fill()
    .map(() => new Array(nums.length).fill(1));

var carryForward = (nums, leftProduct) => {
    for (let index = 1; index < nums.length; index++) {
        leftProduct[index] = nums[index - 1] * leftProduct[index - 1];
    }
}

var carryBackward = (nums, rightProduct) => {
    for (let index = (nums.length - 2); 0 <= index; index--) {
       rightProduct[index] = nums[index + 1] * rightProduct[index + 1];
    }
}

const combineProducts = (nums, leftProduct, rightProduct) => {
    const products = new Array(nums.length).fill(1);

    for (let index = 0; index < nums.length; index++) {
       products[index] = leftProduct[index] * rightProduct[index];
    }

    return products;
}