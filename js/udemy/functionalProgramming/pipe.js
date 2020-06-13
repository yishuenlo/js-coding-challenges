function add(x, y){
    return x + y;
}

function double(x){
    return x * 2;
}


function _pipe(f, g) {
    return function () {
        return g.call(this, f.apply(this, arguments));
    };
}

function pipe(f, g){
    return f(g(arguments));
}

const addThenDouble = pipe(add, double);