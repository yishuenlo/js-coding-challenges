//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

//charCodeAt "A": 65 to "Z": 90;
//charCodeAt "a": 91 to "Z": 122;

let str = "Ruby is cool!"; //Ehol vf pbby!

let output = "";

for(let char of str){
    //assign cipher to UTF-16 code
    if ((/[a-zA-Z]/).test(char)) {
        let rot13 = (char.charCodeAt() + 13);
        //check for upper and lower cases, and assign appropriate UTF-16 code limit
        if ((/[A-Z]/).test(char) && rot13 > 90 || (/[a-z]/).test(char) && (rot13 > 122)) {
            rot13 -= 26;
        }

        output += String.fromCharCode(rot13);
    } else {
        output += char;
    }
}

console.log(output);

function rot13(message) {
    let output = "";

    for (let char of message) {
        //assign cipher to UTF-16 code
        if ((/[a-zA-Z]/).test(char)) {
            let rot13 = (char.charCodeAt() + 13);
            //check for upper and lower cases, and assign appropriate UTF-16 code limit
            if ((/[A-Z]/).test(char) && rot13 > 90 || (/[a-z]/).test(char) && (rot13 > 122)) {
                rot13 -= 26;
            }

            output += String.fromCharCode(rot13);
        } else {
            output += char;
        }
    }

    return output;
}