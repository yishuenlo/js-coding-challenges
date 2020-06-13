//question:
//check to see if a string is palindrome
//input: string
//output: boolean

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

let str = 'tacocat';

function isPalindrome(str){
    //check for edge cases
    if (str.length < 2) return false;

    //check first letter and last letter
    let first = 0;
    let last = str.length - 1;

    //write recursive function to check letters
    function comparingLetters(first, last){
        //establish base case to stop recursion
        if(first > last) return true;

        //break out of function is letter is not the same
        if(str[first] !== str[last]) return false;

        return comparingLetters(first + 1, last - 1);
    }

    return comparingLetters(first, last);
}