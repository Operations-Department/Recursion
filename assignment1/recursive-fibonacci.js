function fibsRec(n) {
    if (n <= 0 || typeof n !== 'number') return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];

    let array = fibsRec(n-1);

    array.push(array[array.length-1] + array[array.length-2]); 

    return array;
}

console.log(fibsRec('hello'));     //Output: []
console.log(fibsRec(-1));          //Output: []
console.log(fibsRec(0));           //Output: []
console.log(fibsRec(1));           //Output: [ 0 ]
console.log(fibsRec(2));           //Output: [ 0, 1 ]
console.log(fibsRec(5));           //Output: [ 0, 1, 1, 2, 3 ]
console.log(fibsRec(8));           //Output: [ 0, 1, 1, 2, 3, 5, 8, 13 ]