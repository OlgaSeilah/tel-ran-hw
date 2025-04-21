let result = sumDigits(8404);
console.log(`sum of digits = ${result}`); // 1234 -> 10


result = luckyNumber(8744054); // 123871 --> 1+3+7 === 2+8+1 (11 === 11)
console.log(result ? 'luckyNumber' : 'unluckyNumber');

function sumDigits(num) {
    let sum = 0;
    let numLength = num.toString().length
    for (let i = 0; i <= numLength; i++) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.trunc(num / 10);
    }
    return sum;
}

function luckyNumber(givenNumber) {
    let digitsOnEvenInd = "";
    let digitsOnOddInd = "";

    let numberToString = givenNumber.toString();
    let numberLength = numberToString.length;

    for (let i = 0; i < numberLength; i++) {
        if (i % 2 === 0) {
            digitsOnEvenInd += numberToString[i];
        } else {
            digitsOnOddInd += numberToString[i];
        }
    }

    if (sumDigits(digitsOnEvenInd) !== sumDigits(digitsOnOddInd)) {
        return false;
    } else {
        return true;
    }
}