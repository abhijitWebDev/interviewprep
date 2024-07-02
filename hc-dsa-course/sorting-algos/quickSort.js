

function quicksort(arr, low=0, high=arr.length-1) {
    if(low < high) {
        let pivotIndex = partition(arr, low, high);
        quicksort(arr, low, pivotIndex-1);
        quicksort(arr, pivotIndex + 1, high);
    }

}
 
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    // looping through it
    for (let j = low; j < high; j++){
        if(arr[j] < pivot) {
            // increament i
            i++;
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
       
    }
    [arr[i+1], arr[high]] = [arr[high], arr[high+1]] // final swap of pivot and ith value
    return i+1;

}