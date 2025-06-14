// Problem -> console 10 times 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// Solution 1 -> use let
// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// Solution 2 -> use function
const func = function () {
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
}

func();