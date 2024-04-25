function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {  
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ... right];
}


const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

console.log(mergeSort(array1));     //Output: [0, 1, 1,  2, 3, 5, 8, 13]
console.log(mergeSort(array2));     //Output: [79, 100, 105, 110]