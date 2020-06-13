//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

let str = "abc#d##c"; //"ac"

// str = str.split('');

for(let i = 0; i < str.length; i++){
    console.log(`str = ${str}`)
    if(str[i] == '#'){
        str.splice(i-1, 2);
        i -= 2;
    }
}

let result = [];

for(let i = 0; i < str.length; i++){
    //if not #, push to result
    if(str[i] !== '#'){
        result.push(str[i]);

    //once hits #, regurgitate the letter that just got pushed into result
    } else {
        result.pop();
    }
}

// str = str.join('');

// function cleanString(str) {
//     let result = [];
//     for (let i of str) {
//         (i !== '#') ? result.push(i) : result.pop();
//     }
//     return result.join('');
// };



var backspaceCompare = function (S, T) {
    let cleanString = function (str) {
        let result = [];
        for (let i of str) {
            (i !== '#') ? result.push(i): result.pop();
        }

        return result.join('');
    }

    return cleanString(S) === cleanString(T);
};

