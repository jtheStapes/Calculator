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