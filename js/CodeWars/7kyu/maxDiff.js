//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

// input = array
// output = number

const maxDiff = (arr) => {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}