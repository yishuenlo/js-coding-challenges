let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

let regex = /[eat]/gi;

for(let word of arr){
    if(regex.test(word)){
        console.log(word);
    }
}