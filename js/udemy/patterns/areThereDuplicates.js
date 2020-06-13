function areThereDuplicates() {
    let obj = {};
    for(let arg of arguments){
        if(obj[arg]){
            return true;
        } else {
            obj[arg] = 1;
        };
    }
    return false;
}

areThereDuplicates(1, 2, 3, 2);

function codewar(){
    let set = new Set(arguments);
    return set.size !== arguments.length;
}

let args = [1, 2, 3, 1, 4];

let i = 0;





function solution(...args){
    //sort arguments to prep for 2 pointers
    args.sort((a, b) => a - b);

    //loop through numbers
    let i = 0;
    for(let j = 1; j <= args.length; j++){
        if(args[i] === args[j]) return true;
        i++;
    }

    return false;
}

solution(1,2,3);
