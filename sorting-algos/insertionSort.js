function insertionSort(arr) {
    // start from second position

    for (let i = 0; i < arr.length; i++) {
        // it will itterate through all the elements
        let currentElement = arr[i];
        let j = i - 1;

        // using while loop
        while(j >= 0 && arr[j] > currentElement) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = currentElement;
        
    }
}

console.log(insertionSort([1, 6, 7, 4, 2, 9]));