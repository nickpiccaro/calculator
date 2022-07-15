var currentNum;
var operateOn=false;
var order=[];
var result;


function add(num1, num2){
    return num1+num2;
};

function subtract(num1, num2){
    return num1-num2;
};

function multiply(num1, num2){
    return num1*num2;
};

function divide(num1, num2){
    return num1/num2;
}

function mod(num1, num2){
    return num1%num2;
}

function operate(operation, num1, num2){
    switch(operation){
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1,num2);
        case "divide":
            return divide(num1,num2);
        case "multiply":
            return multiply(num1,num2);
        case "mod":
            return mod(num1,num2);
        default:
            console.log("Wrong Input");
    }
};

// Display Port Update// you should try to make a function for this
const display = document.getElementById('display');
const display1 = document.getElementById('display1');
display1.textContent='';

const btn0 = document.getElementById('digit-0');
btn0.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+0;
});
const btn1 = document.getElementById('digit-1');
btn1.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+1;
});
const btn2 = document.getElementById('digit-2');
btn2.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+2;
});
const btn3 = document.getElementById('digit-3');
btn3.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+3;
});
const btn4 = document.getElementById('digit-4');
btn4.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+4;
});
const btn5 = document.getElementById('digit-5');
btn5.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+5;
});
const btn6 = document.getElementById('digit-6');
btn6.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+6;
});
const btn7 = document.getElementById('digit-7');
btn7.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+7;
});
const btn8 = document.getElementById('digit-8');
btn8.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+8;
});
const btn9 = document.getElementById('digit-9');
btn9.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+9;
});
const btnP = document.getElementById('digit-.');
btnP.addEventListener('click', function handleClick() {
    display.textContent = display.textContent+'.';
});

//Clear Buttons
const clear = document.getElementById('clear');
clear.addEventListener('click', function handleClick() {
    display.textContent = display.textContent.slice(0, -1);
});
const allclear = document.getElementById('allclear');
allclear.addEventListener('click', function handleClick() {
    display.textContent = '';
});

// Operate
const evalB = document.getElementById('evaluate');
evalB.addEventListener('click', function handleClick() {
    order.push(display.textContent);
    display.textContent = '';
    result = eval(order.join(' '));
    display1.textContent = '';
    display.textContent = result;
    order=[];
});

const modB = document.getElementById('mod');
modB.addEventListener('click', function handleClick() {
    order.push(display.textContent);
    order.push('%');
    display1.textContent = display1.textContent+' '+display.textContent+' %';
    display.textContent = ''
});

const divideB = document.getElementById('divide');
divideB.addEventListener('click', function handleClick() {
    order.push(display.textContent);
    order.push('/');
    display1.textContent = display1.textContent+' '+display.textContent+' /';
    display.textContent = ''
});

const addB = document.getElementById('add');
addB.addEventListener('click', function handleClick() {
    order.push(display.textContent);
    order.push('+');
    display1.textContent = display1.textContent+' '+display.textContent+' +';
    display.textContent = ''
});

const subtractB = document.getElementById('subtract');
subtractB.addEventListener('click', function handleClick() {
    order.push(display.textContent);
    order.push('-');
    display1.textContent = display1.textContent+' '+display.textContent+' -';
    display.textContent = ''
});

const multiplyB = document.getElementById('multiply');
multiplyB.addEventListener('click', function handleClick() {
    order.push(display.textContent);
    order.push('*');
    display1.textContent = display1.textContent+' '+display.textContent+' x';
    display.textContent = ''
});