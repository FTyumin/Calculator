let firstNum='';
let secondNum='';
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
    if(operator==='/' && y===0) 
        return 'Cannot divide by 0, dumbass!';
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
    let buttonType = button.getAttribute("id");
    let result;
    if(buttonPressed=='C') {
        outputDiv.innerHTML='';
        firstNum='';
        secondNum='';
        result='';
        operation='';
    } else if(buttonPressed=='del') {
        
    }
     else {

        if(buttonType==='num') {
            outputDiv.innerHTML = buttonPressed;
            if(!firstNum) 
            {
                firstNum = buttonPressed;
                console.log(firstNum);
            }
            else if(firstNum && !operation) {
                firstNum += buttonPressed;
                outputDiv.innerHTML = firstNum;
            }
               
            else if(!secondNum) {
                secondNum = buttonPressed;
                console.log(secondNum);
            }
            else if(firstNum && secondNum) {
                
            } 
                

            
        } else if(buttonPressed==='=') {
            result = operate(operation, firstNum, secondNum);
            outputDiv.innerHTML = result;
            result = parseInt(result);
            firstNum = result;
            secondNum = '';
        } else {
            
            // result = operate(operation, firstNum, secondNum);
            // if(result) {
            //     outputDiv.innerHTML = result;
            // }
            if(firstNum && secondNum) {
                result = operate(operation, firstNum, secondNum);
            outputDiv.innerHTML = result;
            result = parseInt(result);
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
        display(button)
    })
})