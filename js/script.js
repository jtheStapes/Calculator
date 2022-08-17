let buttons = Array.from(document.querySelectorAll('button'));
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

clearBtn.addEventListener('click', () => 
{
    display.textContent = '0';
})
oneBtn.addEventListener('click', () => 
{
    display.textContent = '1';
})
twoBtn.addEventListener('click', () => 
{
    display.textContent = '2';
})
threeBtn.addEventListener('click', () => 
{
    display.textContent = '3';
})
fourBtn.addEventListener('click', () => 
{
    display.textContent = '4';
})
fiveBtn.addEventListener('click', () => 
{
    display.textContent = '5';
})
sixBtn.addEventListener('click', () => 
{
    display.textContent = '6';
})
sevenBtn.addEventListener('click', () => 
{
    display.textContent = '7';
})
eightBtn.addEventListener('click', () => 
{
    display.textContent = '8';
})
nineBtn.addEventListener('click', () => 
{
    display.textContent = '9';
})
zeroBtn.addEventListener('click', () => 
{
    display.textContent = '0';
})
decimalBtn.addEventListener('click', () => 
{
    display.textContent = '.';
})
console.log(buttons);
function add(a, b) 
{
    return a+b;
}

function subtract(a, b)
{
    return a-b;
}

function multiply(a, b)
{
    return a*b;
}

function divide(a, b)
{
    return a/b;
}

function operate(operator, a, b)
{
    switch(operator)
    {
        case '-': return a-b; break;
        case '+': return a+b; break;
        case '*': return a*b; break;
        case '/': return a/b;
    }
}
console.log(add(2,2))
console.log(subtract(2,2))
console.log(multiply(2,2))
console.log(divide(2,2))
console.log(operate('+', 2, 6));