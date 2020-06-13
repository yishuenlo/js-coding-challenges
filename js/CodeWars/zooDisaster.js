//https://www.codewars.com/kata/5902bc7aba39542b4a00003d/train/javascript

let foodChain = {
    'antelope': ['grass'],
    'big-fish': ['little-fish'],
    'bug': ['leaves'],
    'bear': ['big-fish', 'bug', 'cow', 'leaves', 'sheep'],
    'chicken': ['bug'],
    'cow': ['grass'],
    'fox': ['chicken', 'sheep'],
    'giraffe': ['leaves'],
    'lion': ['antelope', 'cow'],
    'panda': ['leaves'],
    'sheep': ['grass']
}

let zoo = "fox,bug,chicken,grass,sheep";

let animals = zoo.split(',');
let output = [zoo];

// while(animals.length > 1){
//     for (let i = 0; i < animals.length; i++) {
//         //if animal is in the foodchain...
//         if (foodChain[animals[i]]) {
//             //eat their left first
//             if (foodChain[animals[i]].includes(animals[i - 1])) {
//                 output.push(`${animals[i]} eats ${animals[i - 1]}`);
//                 animals.splice(i - 1, 1);
//                 i--;
//             } else if (foodChain[animals[i]].includes(animals[i + 1])) {
//                 output.push(`${animals[i]} eats ${animals[i + 1]}`);
//                 animals.splice(i + 1, 1);
//                 i--;
//             }
//         }
//     }
// }

while (animals.length > 1) {
    for (let i = 0; i < animals.length; i++) {
        if (!foodChain[animals[i]]) continue;
        if (foodChain[animals[i]].includes(animals[i - 1])) {
            output.push(`${animals[i]} eats ${animals[i - 1]}`);
            animals.splice(i - 1, 1);
            i -= 3;
        } else if (foodChain[animals[i]].includes(animals[i + 1])) {
            output.push(`${animals[i]} eats ${animals[i + 1]}`);
            animals.splice(i + 1, 1);
            i -= 3;
        }
    }
}

function eating(i){
    //eat their left first
    if (foodChain[animals[i]].includes(animals[i - 1])) {
        output.push(`${animals[i]} eats ${animals[i - 1]}`);
        animals.splice(i - 1, 1);
        i -= 2;
    } else if (foodChain[animals[i]].includes(animals[i + 1])) {
        output.push(`${animals[i]} eats ${animals[i + 1]}`);
        animals.splice(i + 1, 1);
        i -= 2;
    }
}

console.log(output);

var whoEatsWho = function (zoo) {
    let animals = zoo.split(',');
    let output = [zoo];
    while (animals.length > 1) {
        for (let i = 0; i < animals.length; i++) {
            if (!foodChain[animals[i]]) continue;
            if (foodChain[animals[i]].includes(animals[i - 1])) {
                output.push(`${animals[i]} eats ${animals[i - 1]}`);
                animals.splice(i - 1, 1);
                i -= 3;
            } else if (foodChain[animals[i]].includes(animals[i + 1])) {
                output.push(`${animals[i]} eats ${animals[i + 1]}`);
                animals.splice(i + 1, 1);
                i -= 3;
            }
        }
    }

    output.push(animals[0]);
    return output;
}
