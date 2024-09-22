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