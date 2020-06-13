//https://www.codewars.com/kata/55b7bb74a0256d4467000070/train/javascript
//https://www.geeksforgeeks.org/eulers-totient-function/

let num = 200; 

function properFractions(n) {
    result = n;

    p = 2;
    while(p*p <= n){
        if(n % p == 0){
            while(n % p == 0){
                n = parseInt(n/p);
            }
            result -= parseInt(result/p);
        }
        p++;
    }

    if( n > 1) result -= parseInt(result/n);
    return result;
}

//if num = 81
//Math.sqrt(81) * properFractions(Math.sqrt(81));

function reducedFractions(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (gcd(i, num) === 1) count++;
    }

    return count;
}

function properFractions1(num) {
    if(num <= 1) return 0;
    if(num == 2) return 1;
    let hash = new Map();
    let divisers = [];

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            divisers.push(i);
        } else {
            hash.set(i, 1);
        }
    }


    let upperLimit = Math.ceil(Math.sqrt(num));

    for (let d of divisers) {
        for (let i = 1; i <= upperLimit; i++) {
            console.log(d * i);
            hash.delete(d * i);
        }
    }

    return hash.size + 1;
}