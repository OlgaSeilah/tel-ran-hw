let result = sumDigits(12341);
console.log(`sum of digits = ${result}`); // 1234 -> 10


result = luckyNumber(123871); // 123871 --> 1+3+7 === 2+8+1 (11 === 11)
console.log(result ? 'luckyNumber' : 'UN_luckyNumber');

function sumDigits(num) {
    let sum = 0;
    let numLength = num.toString().length;
    for (let i = 0; i < numLength; i++) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.trunc(num / 10);
    }
    let i = 0;
    while (i < numLength) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.trunc(num / 10);
        numLength--;
    }
    return sum;
}

function luckyNumber(givenNumber) {
    let digitsOnEvenInd = "";
    let digitsOnOddInd = "";

    let numberToString = givenNumber.toString();
    const numberLength = numberToString.length;

    for (let i = 0; i < numberLength; i++) {
        if (i % 2 === 0) {
            digitsOnEvenInd += numberToString[i];
        } else {
            digitsOnOddInd += numberToString[i];
        }
    }

    return sumDigits(digitsOnEvenInd) === sumDigits(digitsOnOddInd);
}