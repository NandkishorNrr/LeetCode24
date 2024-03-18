/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //step 1: sort the array- we get the output array in the default ascending order.
    //step 2: largest elements will be towards the end of the array as the array is a sorted one.
    //step 3: the kth largest element is the last element minus the the given k value.
    //for ex: 3rd largest element in a sorted array will be (n-3)th element.
    //arr[1,2,3,4,5]; k=2
    //2nd largest element = 5-2 = 3rd element = 4.
    var newarr=nums.sort((a,b)=>(a-b));
    let n=newarr.length;
    return newarr[n-k];
};