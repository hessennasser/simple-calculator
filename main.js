const calcBtns = document.querySelectorAll(".calc-btn");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const displayScreen = document.querySelector(".display");

let currentOperand = "";
let previousOperand = "";
let currentOperation = null;

function updateDisplay() {
    displayScreen.innerText = currentOperand;
}

function handleNumberClick(number) {
    if (currentOperand === "0") {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

function handleOperatorClick(operator) {
    if (currentOperation !== null) {
        performCalculation();
    }
    previousOperand = currentOperand;
    currentOperand = "";
    currentOperation = operator;
}

function performCalculation() {
    if (currentOperation === null) {
        return;
    }
    let result = 0;
    const first = parseFloat(previousOperand);
    const second = parseFloat(currentOperand);
    if (currentOperation === "+") {
        result = first + second;
    } else if (currentOperation === "-") {
        result = first - second;
    } else if (currentOperation === "*") {
        result = first * second;
    } else if (currentOperation === "/") {
        result = first / second;
    }
    currentOperand = result.toString();
    currentOperation = null;
    previousOperand = "";
    updateDisplay();
}

function handleClearClick() {
    currentOperand = "0";
    previousOperand = "";
    currentOperation = null;
    updateDisplay();
}

calcBtns.forEach((btn) => {
    if (btn.classList.contains("number")) {
        btn.addEventListener("click", () => {
            handleNumberClick(btn.innerText);
        });
    } else if (btn.classList.contains("operator")) {
        btn.addEventListener("click", () => {
            handleOperatorClick(btn.innerText);
        });
    }
});

equalsBtn.addEventListener("click", () => {
    performCalculation();
});

clearBtn.addEventListener("click", () => {
    handleClearClick();
});

