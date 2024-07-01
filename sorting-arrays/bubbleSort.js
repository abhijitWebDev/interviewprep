function bubbleSort(arr) {
    let isSwap;

    // determine if the array is sorted
    do {
        isSwap=false;
        for(let i=0; i<arr.length; i++) {
            if(arr[i] && arr[i+1] && arr[i] > arr[i+1]) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSwap = true;
            }
        }
        
    } while (isSwap);
    return arr;
}
const newArr = [5, 6, 4, 2]
console.log(bubbleSort(newArr));