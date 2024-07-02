const arr=  [1, 2, 4, 2, 2, 6, 2]

function countKeyInArray(array, key) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === key) {
            count++
        }
        
    }
    return count;
}

// recursive
function recursiveCountKey(array, key, index=0) {
    if(index > array.length) {
        return 0;
    }

    return (array[index] === key ? 1 : 0) + recursiveCountKey(array, key, index+1);

}

console.log(recursiveCountKey(arr, 2, index=0));
console.log(countKeyInArray(arr, 2));