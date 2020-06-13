//write a function that accepts two strings, a message and a list of letter
//check to see if given letters can write the message

//input = two strings
//output = boolean

//'aa', 'abc' returns false
//'abc', 'cdba' returns true

let message = "aca";
let letters = "cdba";

let obj = letters.split("").reduce((obj, l) => {
    obj[l] = ++obj[l] || 1;
    return obj;
}, {});

for(let letter of message){
    if(!obj[letter]) console.log(false);
    if (obj[letter]) obj[letter]--;
}

function constructNote(message, letters){
    //create obj to track letters
    let obj = letters.split("").reduce((obj, l) => {
      obj[l] = ++obj[l] || 1;
      return obj;
    }, {});

    //loop through message
    for (let letter of message) {
      if (!obj[letter]) return false;
      if(obj[letter]) obj[letter]--;
    }

    return true;
}