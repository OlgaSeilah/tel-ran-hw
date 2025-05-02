const printArray = (arr) => {
    console.log('----------------------');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('----------------------');
}

const reverseArray = arr => {
    let j = 0;
    let temp = 0;
    let halfLen = 0;
    if (arr.length % 2 === 0) {
        halfLen = arr.length / 2;
    } else {
        halfLen = (arr.length - 1) / 2;
    }
    for (let i = arr.length - 1; i >= halfLen; i--) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++;
    }
}

const search = (arr, value) => {
    let digitIsInArray = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            digitIsInArray = true;
            return i;
        }
    }
    if (!digitIsInArray) {
        return -1;
    }
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes);
reverseArray(primes);
printArray(primes);

let index = search(primes, 13);
console.log(index); // 2
index = search(primes, 10);
console.log(index); // -1

// =======================||=================================||===============================
const reverseArray1 = arr => {
    let temp = 0;
    let halfLen = arr.length % 2 === 0 ? arr.length / 2 : (arr.length - 1) / 2;
    for (let i = arr.length - 1; i >= halfLen; i--) {
        temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }
}

const search1 = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

const primes1 = [2, 3, 5, 7, 11, 13, 17, 19, 7];
printArray(primes1);
reverseArray1(primes1);
printArray(primes1);

let index1 = search1(primes1, 13);
console.log(index1); // 2
index1 = search1(primes1, 10);
console.log(index1); // -1

// =======================||=================================||===============================
const reverseArrayWhile = arr => {
    let temp = 0;
    let i = arr.length - 1;
    let halfLen = arr.length % 2 === 0 ? arr.length / 2 : (arr.length - 1) / 2;

    while (i > halfLen) {
        temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
        i--
    }
}

const searchWhile = (arr, value) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) return i;
        i++
    }
    return -1;
}

const primesWhile = [2, 3, 5, 7, 11, 13, 17, 19, 7];
printArray(primesWhile);
reverseArrayWhile(primesWhile);
printArray(primesWhile);

let indexWhile = searchWhile(primesWhile, 13);
console.log(indexWhile); // 2
indexWhile = searchWhile(primesWhile, 10);
console.log(indexWhile); // -1