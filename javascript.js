const displayValue = document.querySelector(".display");
displayValue.textContent = "";

let num1 = "";
let op = "";
let num2 = "";
let results = "";

/*function addNumber(num) {
    if(op) {
        num2 += num;
    } else {
        num1 += num;
    }
};*/
//Amazing how similar my ideas were before taking a 1 month break, shown ^above vs ⌄below

function addNum(numValue) {
    op ? num2 += numValue : num1 += numValue;
}
//Updates num1/num2, based on whether operator exists yet.


function addOperator(operator) {
    op = operator;
}
//Updates operator for calculation

function clearCalc() {
    num1 = "";
    op = "";
    num2 = "";
    displayValue.textContent = "";
    allBtns.forEach((btn) => btn.removeEventListener("mouseup", clearCalc));
}
//Clears all values + removes the event listeners triggering clearCalc()

function operate(num1, op, num2) {
    switch (op) {
        case "+":
            results = Number(num1) + Number(num2);
            break;

        case "-":
            results = Number(num1) - Number(num2);
            break;

        case "*":
            results = Number(num1) * Number(num2);
            break;

        case "÷":
            results = Number(num1) / Number(num2); 
            break;

        default:
            results = "ERROR";
            console.log("Something went wrong with operate!");
    }
}
//The actual calculation

const allBtns = document.querySelectorAll("button:not(.equals, .delete, .clear)");
//Lumps all numeric buttons for clearCalc()

const btn1 = document.querySelector(".one");
btn1.addEventListener("click", (e) => {
    addNum("1");
    updateDisplay();
});
const btn2 = document.querySelector(".two");
btn2.addEventListener("click", (e) => {
    addNum("2");
    updateDisplay();
});
const btn3 = document.querySelector(".three");
btn3.addEventListener("click", (e) => {
    addNum("3");
    updateDisplay();
});
const btn4 = document.querySelector(".four");
btn4.addEventListener("click", (e) => {
    addNum("4");
    updateDisplay();
});
const btn5 = document.querySelector(".five");
btn5.addEventListener("click", (e) => {
    addNum("5");
    updateDisplay();
});
const btn6 = document.querySelector(".six");
btn6.addEventListener("click", (e) => {
    addNum("6");
    updateDisplay();
});
const btn7 = document.querySelector(".seven");
btn7.addEventListener("click", (e) => {
    addNum("7");
    updateDisplay();
});
const btn8 = document.querySelector(".eight");
btn8.addEventListener("click", (e) => {
    addNum("8");
    updateDisplay();
});
const btn9 = document.querySelector(".nine");
btn9.addEventListener("click", (e) => {
    addNum("9");
    updateDisplay();
});
const btn0 = document.querySelector(".zero");
btn0.addEventListener("click", (e) => {
    addNum("0");
    updateDisplay();
});
const btnDot = document.querySelector(".dot");
btnDot.addEventListener("click", (e) => {
    addNum(".");
    updateDisplay();
});
const btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", (e) => {
    addOperator("+");
    updateDisplay();
});
const btnSub = document.querySelector(".subtract");
btnSub.addEventListener("click", (e) => {
    addOperator("-");
    updateDisplay();
});
const btnMult = document.querySelector(".multiply");
btnMult.addEventListener("click", (e) => {
    addOperator("*");
    updateDisplay();
});
const btnDiv = document.querySelector(".divide");
btnDiv.addEventListener("click", (e) => {
    addOperator("÷");
    updateDisplay();
});
//Updates num1/op/num2 values, and adds button values to display


const btnEqual = document.querySelector(".equals");
btnEqual.addEventListener("click", () => {
    operate(num1, op, num2);
    displayValue.textContent = `${results} `;
    allBtns.forEach((btn) => btn.addEventListener("mouseup", clearCalc));
});
//Executes current operation and preps buttons to clear on next press

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", () => clearCalc())
//Clears all values when clicked

function updateDisplay() {
    displayValue.textContent = `${num1} ${op} ${num2}`;
}
