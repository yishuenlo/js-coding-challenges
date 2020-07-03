//https://www.codewars.com/kata/513fa1d75e4297ba38000003

//flatten arguments in function
//input: primitives and arrays (no objects)
//output: one array

let arr = [1, [2, 3], 4, 5, [6, [[7]]]];

// function flatten(...args){
//     let arr = [...args];

//     function flat(arr){
//         let result = [];

//         for (let el of arr) {
//             if (Array.isArray(el)) {
//                 result = result.concat(flat(el));
//             } else {
//                 result.push(el);
//             }
//         }

//         return result;
//     }    

//     return flat(arr);
// }


function flatten(...args){
    return args.reduce((acc, cur) => {
        return (Array.isArray(cur)) ?
            acc.concat(flatten(...cur)) :
            acc.concat(cur);
    }, []);
}

