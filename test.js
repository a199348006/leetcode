/**
 * 53. Maximum Subarray
 * Kadane's Algorithm
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  console.log(nums);
  return Math.max(...nums);
};

/**
 * 64. Minimum Path Sum
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ( i === 0 && j === 0) 
        continue;
      else if (i === 0) 
        grid[i][j] += grid[i][j - 1];
      else if (j === 0)
        grid[i][j] += grid[i - 1][j];
      else {
        if (grid[i][j] + grid[i][j - 1] < grid[i][j] + grid[i - 1][j]) {
          grid[i][j] += grid[i][j - 1];
        } else {
          grid[i][j] += grid[i - 1][j];
        }       
      }                  
    }
  }

  return grid[m - 1][n - 1];
};
