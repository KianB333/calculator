const displayValue = document.querySelector(".display");
displayValue.textContent = "";

const btn1 = document.querySelector(".one");
btn1.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn2 = document.querySelector(".two");
btn2.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn3 = document.querySelector(".three");
btn3.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn4 = document.querySelector(".four");
btn4.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn5 = document.querySelector(".five");
btn5.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn6 = document.querySelector(".six");
btn6.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn7 = document.querySelector(".seven");
btn7.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn8 = document.querySelector(".eight");
btn8.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn9 = document.querySelector(".nine");
btn9.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btn0 = document.querySelector(".zero");
btn0.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btnSub = document.querySelector(".subtract");
btnSub.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btnMult = document.querySelector(".multiply");
btnMult.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
const btnDiv = document.querySelector(".divide");
btnDiv.addEventListener("click", (e) => displayValue.textContent += `${e.target.textContent + " "}`)
//Adds button content to display on click.


let num1;
let op;
let num2;

function operate(num1, op, num2) {
    switch (op) {
        case "add":
            return num1 + num2;
            break;

        case "subtract":
            return num1 - num2;
            break;

        case "multiply":
            return num1 * num2;
            break;

        case "divide":
            return num1 / num2; 
            break;

        default:
            console.log("Something went wrong with operate!");
    }
}
