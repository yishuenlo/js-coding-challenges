//https://www.codewars.com/kata/527176c487961e5900000106/train/javascript

var addOne = function (e) {
    return e + 1;
};
var square = function (e) {
    return e * e;
};

var result = [1, 2, 3, 4, 5];
// .map(addOne.pipe(square)) //-> 
//addOne.pipe(square)

//function composition
//https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj

//https://vanslaars.io/blog/create-pipe-function/

Function.prototype.pipe1 = function(g){
    //assign this to a function
    let fn = this;
    return function(){
        //g(fn(arguments))
        return g(fn.apply(this, arguments));
    };
}

console.log(result.map(addOne.pipe(square)));
// [4, 9, 16, 25, 36]


//https://www.codewars.com/kata/527176c487961e5900000106/solutions/javascript
Function.prototype.pipe = function (fun) {
    return function (param) {
        return fun(this(param));
    }.bind(this);
};


Function.prototype.pipe = function (fn) {
    return (...args) => fn(this(...args))
}