/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
Once you pay the cost, you can either climb one or two steps. You need to find minimum cost
 to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var result = 0,
  cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];//[10, 15, 20];
var minCostClimbingStairs = function(cost) { // 746
    for (let i = 2; i < cost.length; i++) {
      cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};


console.log(minCostClimbingStairs(cost));