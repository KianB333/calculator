const displayValue = document.querySelector(".display");
displayValue.textContent = "";

let num1 = "";
let op = "";
let num2 = "";
let results = "";

function addNumber(num) {
    if(op) {
        num2 += num;
    } else {
        num1 += num;
    }
};

function addOperator(operator) {
    op = operator;
}

function operate(num1, op, num2) {
    switch (op) {
        case "add":
            results = Number(num1) + Number(num2);
            break;

        case "subtract":
            results = Number(num1) - Number(num2);
            break;

        case "multiply":
            results = Number(num1) * Number(num2);
            break;

        case "divide":
            results = Number(num1) / Number(num2); 
            break;

        default:
            results = "ERROR";
            console.log("Something went wrong with operate!");
    }
}

function clearCalc() {
    num1 = "";
    op = "";
    num2 = "";
    displayValue.textContent = "";
    allBtns.forEach((btn) => btn.removeEventListener("mouseup", clearCalc));
}
//Clears all values + removes the clearCalc() event listeners

const allBtns = document.querySelectorAll("button:not(.equals, .delete, .clear)");
//For all numeric buttons

const btn1 = document.querySelector(".one");
btn1.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("1");
});
const btn2 = document.querySelector(".two");
btn2.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("2");
});
const btn3 = document.querySelector(".three");
btn3.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("3");
});
const btn4 = document.querySelector(".four");
btn4.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("4");
});
const btn5 = document.querySelector(".five");
btn5.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("5");
});
const btn6 = document.querySelector(".six");
btn6.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("6");
});
const btn7 = document.querySelector(".seven");
btn7.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("7");
});
const btn8 = document.querySelector(".eight");
btn8.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("8");
});
const btn9 = document.querySelector(".nine");
btn9.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("9");
});
const btn0 = document.querySelector(".zero");
btn0.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber("0");
});
const btnDot = document.querySelector(".dot");
btnDot.addEventListener("click", (e) => {
    displayValue.textContent += `${e.target.textContent}`;
    addNumber(".");
});
const btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", (e) => {
    displayValue.textContent += `${" " + e.target.textContent + " "}`;
    addOperator("add");
});
const btnSub = document.querySelector(".subtract");
btnSub.addEventListener("click", (e) => {
    displayValue.textContent += `${" " + e.target.textContent + " "}`;
    addOperator("subtract");
});
const btnMult = document.querySelector(".multiply");
btnMult.addEventListener("click", (e) => {
    displayValue.textContent += `${" " + e.target.textContent + " "}`;
    addOperator("multiply");
});
const btnDiv = document.querySelector(".divide");
btnDiv.addEventListener("click", (e) => {
    displayValue.textContent += `${" " + e.target.textContent + " "}`;
    addOperator("divide");
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
//Clears all values
