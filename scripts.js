function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(operator,x,y) {
    switch(operator) {
        case '+':
            add(x,y);
        case '-':
            subtract(x,y);
        case '*':
            multiply(x, y);
        case '/':
            divide(x, y);
    }
}

function clear() {
    
}