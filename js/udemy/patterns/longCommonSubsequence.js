//https://www.codewars.com/kata/52756e5ad454534f220001ef

//input: string
//output: string

let strA = "132535365";
let strB = "123456789";

//'acf'

//do you see c after a?
//find index of c in strA and strB

//do you see f after c?
//find index of f in str B and check if it's smaller than c index

// let result = '';

// let b = 0;

// while(b < strB.length){
//     for (let a = 0; a < strA.length; a++) {
//         if (strA[a] === strB[b]) {
//             result += strB[b];
//             b++;
//         }
//     }

//     b++;
// }

function LCS(strA, strB) {
    //edge case
    if(strA === "" || strB === '') return '';

    let result = '';

    let b = 0;

    while (b < strB.length) {
        //loop through A and compare with B
        for (let a = 0; a < strA.length; a++) {
            if (strA[a] === strB[b]) {
                //only increment B is matches with A
                result += strB[b];
                b++;
            }
        }

        //continue looping through rest of B
        b++;
    }

    return result;
}

