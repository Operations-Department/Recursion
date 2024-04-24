function fibs(n) {
    if (n <= 0 || typeof n !== 'number') return [];
    if (n == 1) return [0];

    let a = 0;
    let b = 1;
    let c;
    let array = [a, b];

    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        array.push(b);
    }

    return array;
}


console.log(fibs('hello'));     //Output: []
console.log(fibs(-1));          //Output: []
console.log(fibs(0));           //Output: []
console.log(fibs(1));           //Output: [ 0 ]
console.log(fibs(2));           //Output: [ 0, 1 ]
console.log(fibs(5));           //Output: [ 0, 1, 1, 2, 3 ]
console.log(fibs(8));           //Output: [ 0, 1, 1, 2, 3, 5, 8, 13 ]