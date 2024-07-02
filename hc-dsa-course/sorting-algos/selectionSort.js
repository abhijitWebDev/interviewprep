function selectionSort(array) {
    let n = array.length;

    for (let i = 0; i < n-1; i++) {
        let minIndex = i; // we are holding index

        // another loop
        for (let j = i+1; j < n ; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    return array;




}