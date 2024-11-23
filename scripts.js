let firstNum='';
let secondNum='';
let operation;

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
    if(operator==='/' && y==0) 
        return 'Cannot divide by 0, dumbass!';
    
    switch(operator) {
        case '+':
            x = parseFloat(x);
            y = parseFloat(y);
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

function display(button) {
    
    let outputDiv = document.querySelector(".display");
    let buttonPressed = button.getAttribute("name");
    let buttonType = button.getAttribute("id");
    let result;
    if(buttonPressed=='C') {
        outputDiv.innerHTML='';
        firstNum='';
        secondNum='';
        result='';
        operation='';
    } else if(buttonPressed=='del') {
        let str = outputDiv.innerHTML.substring(0, outputDiv.innerHTML.length - 1);
        outputDiv.innerHTML = str;
    } else if(buttonPressed=='.') {
        if(outputDiv.innerHTML.includes('.'))
            return;
         if (secondNum && operation) {
            secondNum+='.';
            outputDiv.innerHTML = secondNum;
        }
        else if(firstNum) {
            firstNum+='.';
            outputDiv.innerHTML = firstNum;
        }
        
    } else {

        if(buttonType==='num') {
            outputDiv.innerHTML = buttonPressed;
            if(!firstNum) 
                firstNum = buttonPressed;
            else if(firstNum && !operation) {
                firstNum += buttonPressed;
                outputDiv.innerHTML = firstNum;
            }
               
            else if(!secondNum) 
                secondNum = buttonPressed;
            else if (secondNum) {
                secondNum+=buttonPressed;
                outputDiv.innerHTML = secondNum;
            }
                
        } else if(buttonPressed==='=') {
            if(!firstNum || !secondNum) 
                return;
            result = operate(operation, firstNum, secondNum);

            // edge case dividing by 0
            if(typeof result==='string') {
                outputDiv.innerHTML = result;
                firstNum = '';
                secondNum = '';
                return;
            }
                
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            outputDiv.innerHTML = result;
            firstNum = result;
            secondNum = '';
        } else {
            if(firstNum && secondNum) {
                result = operate(operation, firstNum, secondNum);
                result = Math.round((result + Number.EPSILON) * 100) / 100;
                outputDiv.innerHTML = result;
                firstNum = result;
                secondNum = '';
            }
            operation = buttonPressed;
        }
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button);
    })
})