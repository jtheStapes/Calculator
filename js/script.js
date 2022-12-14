//Variables and constants
let buttons = Array.from(document.querySelectorAll('button'));
let firstValue = '0'; //Placeholder for first input value
let secondValue = ''; //Placeholder for second input value
let operator = ''; //Placeholder for operator
let displayValue = firstValue; //The actual value currently held in the display window
const display = document.querySelector('.display');
const clearBtn = buttons[3];
const delBtn = buttons[4];
const plusminusBtn = buttons[17];
const divideBtn = buttons[9];
const sevenBtn = buttons[0];
const eightBtn = buttons[1];
const nineBtn = buttons[2];
const multiplyBtn = buttons[8];
const fourBtn = buttons[5];
const fiveBtn = buttons[6];
const sixBtn = buttons[7];
const minusBtn = buttons[14];
const oneBtn = buttons[10];
const twoBtn = buttons[11];
const threeBtn = buttons[12];
const addBtn = buttons[13];
const zeroBtn = buttons[15];
const decimalBtn = buttons[16];
const equalBtn = buttons[18];
display.textContent = '0';
let keyCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'
, '-', '+', '=', '/', 'Enter', 'Backspace', '.', 'Escape']  //Only keycodes allowed for keyboard input

//Calculator buttons
clearBtn.addEventListener('click', () => 
{
    clearAll();
})
delBtn.addEventListener('click', () => 
{
    deleteValue(firstValue, secondValue);
})

document.addEventListener('keydown', (event) => {
    if (!keyCodes.includes(event.key))
    {
        return;
    }
    else {
        if (event.key === 'Enter' || event.key === '=')
        {
            if (!firstValue && !secondValue)
            {
                return;
            }
            else if (!secondValue)
            {
                return firstValue;
            }
            else if (firstValue && secondValue)
            {
                equal(operator, firstValue, secondValue);
            }
        } else if (event.key === '+' ||
                event.key === '-' ||
                event.key === '*' ||
                event.key === '/')
        {
            changeDisplayOperator(`${event.key}`);
        } else if (event.key === 'Backspace')
        {
            deleteValue(firstValue, secondValue);
        
        } else if (event.key === 'Escape')
        {
            clearAll();
        } 
        else {
            changeDisplayNum(`${event.key}`);
        }
    }
});

oneBtn.addEventListener('click', () => 
{
    changeDisplayNum('1');
})
twoBtn.addEventListener('click', () => 
{
    changeDisplayNum('2');
})
threeBtn.addEventListener('click', () => 
{
    changeDisplayNum('3');
})
fourBtn.addEventListener('click', () => 
{
    changeDisplayNum('4');
})
fiveBtn.addEventListener('click', () => 
{
    changeDisplayNum('5');
})
sixBtn.addEventListener('click', () => 
{
    changeDisplayNum('6');
})
sevenBtn.addEventListener('click', () => 
{
    changeDisplayNum('7');
})
eightBtn.addEventListener('click', () => 
{
    changeDisplayNum('8');
})
nineBtn.addEventListener('click', () => 
{
    changeDisplayNum('9');
})
zeroBtn.addEventListener('click', () => 
{
    changeDisplayNum('0');
})
decimalBtn.addEventListener('click', () => 
{
    changeDisplayNum('.');
})
plusminusBtn.addEventListener('click', () => 
{
    if (displayValue === firstValue) 
    {
        displayValue = (displayValue*(-1.0)).toString();
        firstValue = displayValue;
    } else if (displayValue === secondValue) 
    {
        displayValue = (displayValue*(-1.0)).toString();
        secondValue = displayValue;
    }
    display.textContent = displayValue;
})

divideBtn.addEventListener('click', () => 
{
    changeDisplayOperator('/');
})
multiplyBtn.addEventListener('click', () => 
{
    changeDisplayOperator('*');
})
minusBtn.addEventListener('click', () => 
{
    changeDisplayOperator('-');
})
addBtn.addEventListener('click', () => 
{
    changeDisplayOperator('+');
})
equalBtn.addEventListener('click', () => 
{
    if (!firstValue && !secondValue)
    {
        return;
    }
    else if (!secondValue)
    {
        return firstValue;
    }
    else 
    {
        equal(operator, firstValue, secondValue);
    }
})

function equal(op, valOne, valTwo)
{
    displayValue = operate(op, parseFloat(valOne), parseFloat(valTwo)).toString(); //Performs the operation input from calculator
    //The if...else statement below allows for large operands and converts them to exponential form. 
    if (displayValue.length > 11)
    {   
        if (parseFloat(displayValue) > 1) 
        {
            displayValue = (parseFloat(displayValue).toExponential(5)).toString(); //Converts displayValue to exponential form
            let tempDisplay = (parseFloat(displayValue).toExponential()).toString(); //Holds the real value in a second variable to be used for the next operation
            firstValue = tempDisplay;
            secondValue = '';
            operator = '';
            display.textContent = displayValue;
        } else {
            displayValue = (parseFloat(displayValue).toExponential(5)).toString(); //Converts displayValue to exponential form
            firstValue = displayValue;
            secondValue = '';
            operator = '';
            display.textContent = displayValue;
        }
    } else {
        firstValue = displayValue;
        secondValue = '';
        operator = '';
        display.textContent = displayValue;
    }
}

function deleteValue (valOne, valTwo)
{
    if (!valTwo)
    {
        valOne = valOne.slice(0, valOne.length - 1);
        displayValue = valOne;
        if (!displayValue)
        {
            firstValue = '0';
            displayValue = firstValue;
            display.textContent = displayValue;
            return;
        }
        firstValue = valOne;
        display.textContent = displayValue;
    } else if (valTwo)
    {
        valTwo = valTwo.slice(0, valTwo.length - 1);
        displayValue = valTwo;
        if (!displayValue)
        {
            secondValue = '0';
            displayValue = secondValue;
            display.textContent = displayValue;
            return;
        }
        secondValue = valTwo;
        display.textContent = displayValue;
    }
}

function clearAll ()
{
    firstValue = '0';
    secondValue = '';
    operator = '';
    displayValue = firstValue;
    display.textContent = displayValue;
}

function changeDisplayNum(num) //Displays number to display window
{
    if (!operator) 
    {
        if (firstValue.length < 11)
        {
            if (num === '.' && firstValue.includes(num)) //Can't have two decimals in one number
            {
                return;
            }
            if (firstValue.length === 1 && firstValue === '0')
            {
                firstValue = '';
            }
            firstValue += num;
            displayValue = firstValue;
        }
    } else if (operator)
    {
        if (secondValue.length < 11) 
        {
            if (num === '.' && secondValue.includes(num)) //Can't have two decimals in one number
            {
                return;
            }
            secondValue += num;
            displayValue = secondValue;
        }
    } 
    display.textContent = displayValue;
}

function changeDisplayOperator(op) //Changes operator based on user input
{
    if (!operator) //Sets the initial operator
    {
        operator = op;
    } else if (operator)
    {
        displayValue = operate(operator, parseFloat(firstValue), parseFloat(secondValue)).toString();
        if (displayValue.length > 11)
        {   
            if (parseFloat(displayValue) > 1) 
            {
                displayValue = (parseFloat(displayValue).toExponential(5)).toString(); //Converts displayValue to exponential form
                let tempDisplay = (parseFloat(displayValue).toExponential()).toString(); //Holds the real value in a second variable to be used for the next operation
                firstValue = tempDisplay;
                secondValue = '';
                operator = op;
                display.textContent = displayValue;
            } else {
                displayValue = (parseFloat(displayValue).toExponential(5)).toString(); //Converts displayValue to exponential form
                //displayValue = displayValue.substring(-1, 10); //Shortens the real value to be displayed
                firstValue = displayValue;
                secondValue = '';
                operator = op;
                display.textContent = displayValue;
            }
        } else {
            firstValue = displayValue;
            secondValue = '';
            operator = op;
            display.textContent = displayValue;
        }
    }      
}

//Basic math functions
function add(a, b) { return a+b; }
function subtract(a, b) { return a-b; }
function multiply(a, b) { return a*b; }
function divide(a, b) {
    if (b === 0) //Prevents dividing by zero
    {
        return 'LOL, NOPE!';
    }
    return a/b; 
}

function operate(operator, a, b) //Calculates based on operator and operands
{
    switch(operator)
    {
        case '-': return subtract(a,b); break;
        case '+': return add(a, b); break;
        case '*': return multiply(a, b); break;
        case '/': return divide(a, b);
    }
}