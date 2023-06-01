/**
 * @param {number[]} nums
 * @return {number}
 */
/** var maxSubArray = function(nums) {

    let max = -Infinity

    for( let i=0 ; i<nums.length ; i++){
        for( let j=i ; j< nums.length ; j++){
            let sum =0 
            for( let k=i ; k<= j ; k++){
                sum += nums[k]
            }

            if(max < sum) max = sum
        }
    }

    return max
    
};
*/
var maxSubArray = function(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element

    for (let i = 1; i < nums.length; i++) {
        // Choose between extending the current subarray or starting a new subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update the maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
