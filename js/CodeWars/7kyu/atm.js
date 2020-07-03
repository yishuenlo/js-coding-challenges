//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

let note = 1250;

let count = 0;

//check to see if note is divible of 10
//if yes, proceed to counting notes

let bills = [500, 200, 100, 50, 20, 10];

function solve(note) {
    let count = 0;
    let bills = [500, 200, 100, 50, 20, 10];
    if (note % 10 === 0) {
        for (let bill of bills) {
            if (note >= bill) {
                count += Math.floor(note / bill);
                note = note % bill;
            }
        }
    } else {
        return -1;
    }

    return count;
}



console.log(count);

// if (note % 10 === 0) {
//     while (note > 0) {
//         if (note > 500) {
//             note -= 500;
//             count++;
//         } else if (note < 500 && note >= 200) {
//             note -= 200;
//             count++;
//         } else if (note < 200 && note >= 100) {
//             note -= 100;
//             count++;
//         } else if (note < 100 && note >= 50) {
//             note -= 50;
//             count++;
//         } else if (note < 50 && note >= 20) {
//             note -= 20;
//             count++;
//         } else if (note < 20 && note >= 10) {
//             note -= 10;
//             count++;
//         }
//     }
//     //if not, return -1
// } else {
//     count = -1;
// }