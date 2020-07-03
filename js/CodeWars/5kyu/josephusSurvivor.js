//https://www.codewars.com/kata/555624b601231dc7a400017a

let total = 7;
let eliminate = 3;

let sequence = [];
let counter = 0;

for(let i = 1; i <= total; i++){
    sequence.push(i);
}

while(sequence.length > 1){
    for (let i = 0; i < sequence.length; i++) {
        counter++;
        if (counter % eliminate === 0) {
            sequence.splice(i, 1);
            i--;
        } else {
            continue;
        }
    }
}


//RECURSION!
function josephusSurvivorIter(total, eliminate) {
    if(eliminate === 1) return total;
    let sequence = [];
    let counter = 0;

    for (let i = 1; i <= total; i++) {
        sequence.push(i);
    }

    while (sequence.length > 1) {
        for (let i = 0; i < sequence.length; i++) {
            counter++;
            if (counter % eliminate === 0) {
                sequence.splice(i, 1);
                i--;
            } else {
                continue;
            }
        }
    }

    return sequence[0];
}


function josephusSurvivor(total, eliminate){
    //establish base case

    //run code
}



// while(sequence.length > 0){
    
// }

console.log(sequence);