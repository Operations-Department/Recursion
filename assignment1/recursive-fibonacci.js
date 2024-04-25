function fibsRec(n) {
    if (n <= 0 || typeof n !== 'number') return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];

    let array = fibsRec(n-1);

    array.push(array[array.length-1] + array[array.length-2]); 
    
    return array;
}

console.log(fibsRec(5));