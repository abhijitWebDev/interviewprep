/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

//steps
 // continue inserting each interval and check starting of new interval is less than or equal to ending of the last element

// if it is true we will update the end time of the last interval to be the maxmimum of end time of both interval
 // if it is false then simple insert interval

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];

  for(const interval of intervals) {
    if(!merged.length || merged[merged.length - 1][1] < interval[0]) {
        merged.push(interval);
    } else {
        merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], interval[1])
    }
  }
  return merged;
};
