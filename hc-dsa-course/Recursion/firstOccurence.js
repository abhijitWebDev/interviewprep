// iterative mode

const arr =[3,4,1,8,1,7]
let findMe = 7;
let currentIndex = 0;


function firstOcc(arr,findMe, currentIndex ) {
    while(currentIndex < arr.length) {
        if(arr[currentIndex] == findMe) {
            return currentIndex;
        }
        currentIndex += 1;
    }

    return -1;

}


// recursive mode

const recFirstOcc = (arr,findMe, currentIndex) => {
    if(arr.length === currentIndex) {
        return -1;
    }
    if(arr[currentIndex] === findMe) {
        return currentIndex;
    }

    return recFirstOcc(arr, findMe, currentIndex + 1);

}

console.log(firstOcc(arr, findMe, currentIndex));
console.log(recFirstOcc(arr,findMe, currentIndex));