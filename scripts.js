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
        if(!secondNum) {
            firstNum = firstNum.substring(0, firstNum.length - 1);
            outputDiv.innerHTML = firstNum;
            console.log(firstNum);
        }
        if(secondNum) {
            secondNum = secondNum.substring(0, secondNum.length - 1);
            outputDiv.innerHTML = secondNum;
            console.log(secondNum); 
        }
        
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
const container = document.querySelector(".container");
let input = document.querySelector("input");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button);
    })
})

const body = document.querySelector("body")
let outputDiv = document.querySelector(".display");

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const validKeys = '0123456789.+-*/=BackspaceEscapeEnter';

    if (!validKeys.includes(key)) return;

    if (key >= '0' && key <= '9' || key === '.') {
        display({
            getAttribute: (attr) => {
                if (attr === "name") return key; // Simulate button name
                if (attr === "id") return "num"; // Simulate button type
            }
        });
        console.log("Number key pressed:", key);
    } else if ('+-*/'.includes(key)) {
        display({
            getAttribute: (attr) => {
                if (attr === "name") return key; // Simulate operator name
                if (attr === "id") return "op";  // Simulate operator type
            }
        });
        console.log("Operator key pressed:", key);
    } else if (key === '=' || key === 'Enter') {
        display({
            getAttribute: (attr) => {
                if (attr === "name") return "="; // Simulate equals button
                if (attr === "id") return "equals"; 
            }
        });
        console.log("Equals key pressed");
    } else if (key === 'Backspace') {
        display({
            getAttribute: (attr) => {
                if (attr === "name") return "del"; // Simulate delete button
                if (attr === "id") return "del";
            }
        });
        console.log("Backspace key pressed");
    } else if (key === 'c') {
        display({
            getAttribute: (attr) => {
                if (attr === "name") return "C"; // Simulate clear button
                if (attr === "id") return "clear";
            }
        });
        console.log("Escape key pressed");
    }
    console.log(key)
});
