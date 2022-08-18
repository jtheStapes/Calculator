//Vairables and constants
let buttons = Array.from(document.querySelectorAll('button'));
let firstValue = ''; //Placeholder for first input value
let secondValue = ''; //Placeholder for second input value
let operator = ''; //Placeholder for operator
let displayValue = 0; //The actual value currently held in the display window
const display = document.querySelector('.display');
const clearBtn = buttons[0];
const plusminusBtn = buttons[1];
const moduloBtn = buttons[2];
const divideBtn = buttons[3];
const sevenBtn = buttons[4];
const eightBtn = buttons[5];
const nineBtn = buttons[6];
const multiplyBtn = buttons[7];
const fourBtn = buttons[8];
const fiveBtn = buttons[9];
const sixBtn = buttons[10];
const minusBtn = buttons[11];
const oneBtn = buttons[12];
const twoBtn = buttons[13];
const threeBtn = buttons[14];
const addBtn = buttons[15];
const zeroBtn = buttons[16];
const decimalBtn = buttons[17];
const equalBtn = buttons[18];
display.textContent = 0;


//Calculator buttons
clearBtn.addEventListener('click', () => 
{
    firstValue = '';
    secondValue = '';
    operator = '';
    display.textContent = '0';
})
oneBtn.addEventListener('click', () => 
{
    changeDisplayNum('1');
    console.log(firstValue);
    console.log(secondValue);
    console.log(displayValue);
})
twoBtn.addEventListener('click', () => 
{
    changeDisplayNum('2');
    console.log(firstValue);
    console.log(secondValue);
    console.log(displayValue);
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
    // console.log(firstValue);
    // console.log(secondValue);
    // console.log(displayValue);
    if (displayValue === firstValue) 
    {
        displayValue = displayValue*(-1);
        firstValue = displayValue;
    } else if (displayValue === secondValue) 
    {
        displayValue = displayValue*(-1);
        secondValue = displayValue;
    }
    display.textContent = displayValue;
    
})
moduloBtn.addEventListener('click', () => 
{
    changeDisplayOperator('%');
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
    console.log(firstValue);
    console.log(secondValue);
    console.log(displayValue);
    
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
    displayValue = operate(operator, parseFloat(firstValue), parseFloat(secondValue));
    firstValue = displayValue.toString();
    secondValue = '';
    operator = '';
    display.textContent = displayValue;
    }
})

function changeDisplayNum(num) //Displays number to display window
{
    if (!operator) 
    {
        firstValue += num;
        displayValue = firstValue;
    } else if (operator)
    {
        secondValue += num;
        displayValue = secondValue;
    } 
    display.textContent = displayValue;
}


function changeDisplayOperator(op) //Changes operator based on user input
{
    if (!operator)
    {
        operator = op;
    } else if (operator)
    {
        if (firstValue.includes('.')) { firstValue = parseFloat(firstValue) }
        else if (secondValue.includes('.')) { secondValue = parseFloat(secondValue) }
        else { firstValue = parseInt(firstValue); secondValue = parseInt(secondValue); }

        displayValue = operate(operator, firstValue, secondValue);
        firstValue = displayValue.toString();
        secondValue = '';
        operator = op;
        display.textContent = displayValue;
    }
    
}

//Basic math functions
function add(a, b) { return a+b; }
function subtract(a, b) { return a-b; }
function multiply(a, b) { return a*b; }
function divide(a, b) { return a/b; }
function modulo(a, b) { return a%b; }

function operate(operator, a, b) //Calculates based on operator and operands
{
    switch(operator)
    {
        case '-': return subtract(a,b); break;
        case '+': return add(a, b); break;
        case '*': return multiply(a, b); break;
        case '%': return modulo(a, b); break;
        case '/': return divide(a, b);
    }
}

let example = 2
let example2 = 2.3
console.log(example + example2);