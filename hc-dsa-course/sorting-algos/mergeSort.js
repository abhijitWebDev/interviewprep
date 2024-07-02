
function mergeSort(arr) {
    console.log(arr);
    if(arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];

    // traverse to both left and right side
    let leftBox = 0;
    let rightBox = 0;


    while(leftBox < left.length && rightBox < right.length) {
        if(left[leftBox] < right[rightBox]) {
            result.push(leftBox);
            left++;
        } else if(right[rightBox] < left[leftBox]) {
            result.push[rightBox];
            right++;
        }
    }
    return result;
}

console.log(mergeSort([1, 3, 4, 6, 8, 10, 14, 15]));
