/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = []
    for(let i=0 ; i< nums.length ; i++){
        let product = 1
        for(let j=0 ; j< nums.length ; j++){
            if( i != j) {
                product *= nums[j]
            }
        }
        answer[i] = product
    }
    return answer
};