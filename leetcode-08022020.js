// https://leetcode.com/problems/running-sum-of-1d-array/
const runningSum = function(nums) {
    sum = 0;
    return nums.map((x) => sum += x);
};

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
const kidsWithCandies = function(candies, extraCandies) {
    let highestKid = Math.max(...candies);
    let result = [];
    for (i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= highestKid) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};

// https://leetcode.com/problems/number-of-good-pairs/
var numIdenticalPairs = function(nums) {
    let good = 0;
    for (i=0;i<nums.length;i++) {
        for (j=0;j<nums.length;j++) {
            if (nums[i] == nums[j] && i < j) {
                good++;
            }
        }
    }
    return good;
};