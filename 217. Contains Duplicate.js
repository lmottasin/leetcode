/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0 ; i<nums.length ; i++){
        let count = 0 
        for(let j=i+1 ; j< nums.length; j++){
            if(nums[i] == nums[j]){
                count++
            }
            if(count > 0){
                return true
            }
        }
    }
    return false
};