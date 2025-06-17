const inputFields = [...document.querySelectorAll("input")];
const selectElement = document.querySelectorAll("select"); // 2 items
const selectOptions = [...document.querySelectorAll("option")];

const myHeaders = new Headers();
myHeaders.append("apikey", "O5QUOCBruVX40ndM7Y5cORFmVSRGSpF6");

calculateBtn.addEventListener("click", () => {
    getConvertedAmount();
})

function getConvertedAmount() {
    const [from, to, amount] = inputFields.map(field => field.value)

    fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
        method: "GET",
        headers: myHeaders
    })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.success === true) {
                createElement('h4', `Result of converting ${from} to ${to} is ${responseJson.result}`);
            } else {
                console.log(`error success: ${responseJson.success}`);
                console.log(`error 3: ${JSON.stringify(responseJson.error)}`);

                createElement('h4', `Error while evaluating the request:
                Success: ${JSON.stringify(responseJson.success)}, 
                Error: ${JSON.stringify(responseJson.error)}`);
            }
        })
        .catch(err => {
            createElement('h4', `Could not find any response: ${err}`);
        });
}


// document.addEventListener("DOMContentLoaded", () => {
//     fetch(`https://api.apilayer.com/fixer/symbols`, {
//         method: "GET",
//         headers: myHeaders
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             } else {
//                 return response.json();
//             }
//         })
//         .then(responseJson => {
//             if (responseJson.success === true) {
//                 console.log(`===============`) // here we are
//                 console.log(responseJson); // object
//
//                 let symbolsMap = JSON.parse(responseJson, function (k, v) {
//
//                 })
//
//
//                 console.log(symbolsMapArray);
//             }
//         })
// })

