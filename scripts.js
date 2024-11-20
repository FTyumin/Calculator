let firstNum;
let secondNum;
let operation;

function add(x,y) {
    console.log(x+y);
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
    x = parseInt(x);
    y = parseInt(y);
    switch(operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

function clear() {

}

function display(button) {
    
    let outputDiv = document.querySelector(".display");
    let buttonPressed = button.getAttribute("name");
    let result;
    if(buttonPressed=='C') {
        outputDiv.innerHTML='';
    } else {

        if( buttonPressed=== '=') {
            result = operate(operation, firstNum, secondNum);
            
        }
        else if (buttonPressed=='/' || buttonPressed=='*' ||
             buttonPressed==='+' || buttonPressed=='-') {
                operation = buttonPressed;
        }
        if(!firstNum)
            firstNum = button.getAttribute("name");
        else 
            secondNum = button.getAttribute("name");
    
        outputDiv.innerHTML += button.getAttribute("name");
        if(result)
            outputDiv.innerHTML += result;
        
    }
    


}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button)
    })
})