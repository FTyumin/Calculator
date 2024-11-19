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

function display(button) {
    let outputDiv = document.querySelector(".display");
    outputDiv.innerHTML = button.getAttribute("name");

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button)
    })
})