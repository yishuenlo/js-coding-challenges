//https://www.codewars.com/kata/54108ea1a0e736cf62000b93/train/javascript

// function z(l) {
//     return Math.floor(Math.log2(l)) + 1;
// }

// function z(l){
//     let count = 0;
//     function search(l){
//         if (l < 1) return count;
//         count++;
//         return search(l /= 2);
//     }
//     search(l);
//     return count;
// }

function z(l, count = 0) {
    if (l < 1) return count;
    count++;
    return z(l /= 2, count);
}