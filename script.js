
// global variables 

let numberHolder = "";
let clearHolder = 0;  
let currentOperator; 
let firstNumber;
let secondNumber;
let currentTotal; 
let buttons = document.querySelectorAll("#buttons");
let displayVal = document.querySelector(".numbers");

// math functions 

function add(a, b) {
	return a + b; 
}

function subtract(a, b) {
	return a - b; 
}

function multiply(a, b) {	
	return a * b;
}

function divide(a, b) {
	return a / b; 
}

function operate(a, operator, b){
	switch (operator){ 
        case "+": 
            return add(Number(a), Number(b))
            break; 
        case "-": 
            return subtract(Number(a), Number(b))
            break; 
        case "*": 
            return multiply(Number(a), Number(b))
            break; 
        case "/": 
            return divide(Number(a), Number(b))
            break;
	}
}

// clear 

function clearCalculator() {  
    displayVal.innerHTML = "";
    numberHolder = "";
    if (clearHolder == 0){
        clearHolder = 1; 
    } else if (clearHolder == 1){
        currentOperator = null; 
        firstNumber = null; 
        secondNumber = null; 
        currentTotal = null;
        clearHolder = 0;
    }

}

// On click comp


function buttonss(){
    for (let i = 0; i < buttons.length; i++) {   
        buttons[i].addEventListener('click', (event) => {
            switch (event.target.innerHTML){
                case "clear": 
                    clearCalculator();
                    break; 
                case "+": 
                case "-":
                case "*":
                case "/":
                    operator(); 
                    break; 
                case "=":
                    equals(); 
                    break;
                case ".":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5": 
                case "6":
                case "7": 
                case "8":
                case "9":
                case "0":
                    numberDisplay();
                    break;
                 default:           
                    break; 
            }                                                                                                                                                                                 
        });
    }
}

buttonss();

// Keyboard comp

function keys(){
    document.addEventListener('keydown', event => {
        switch(event.key){
            case "Backspace": 
                    clearCalculator();
                    break; 
                case "+": 
                case "-":
                case "*":
                case "/":
                    console.log(event); 
                    keyboardOperator(); 
                    break; 
                case "=":
                    equals(); 
                    break;
                case ".":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5": 
                case "6":
                case "7": 
                case "8":
                case "9":
                case "0":
                    numberDislayKeyboard()
                    break;
                 default:           
                    break;
        }
    })
}

keys();

// Operator 

function operator(){
    if (numberHolder == ""){
        displayVal.innerHTML = "ERROR";
    } else if (currentOperator == "=") {
        currentOperator = event.target.innerHTML; 
    } else if (firstNumber && !secondNumber) {
        secondNumber = numberHolder; 
        currentTotal = operate(firstNumber, currentOperator, secondNumber); 
        displayVal.innerHTML = currentTotal;
        firstNumber = currentTotal; 
        secondNumber = null; 
        currentOperator = event.target.innerHTML;
    } else if (!firstNumber && !secondNumber) {
        firstNumber = numberHolder;
        currentOperator = event.target.innerHTML
    } 

    numberHolder = "";
    clearHolder = 0;
}

function keyboardOperator(){
    if (numberHolder == ""){
        displayVal.innerHTML = "ERROR";
    } else if (currentOperator == "=") {
        currentOperator = event.key; 
    } else if (firstNumber && !secondNumber) {
        secondNumber = numberHolder; 
        currentTotal = operate(firstNumber, currentOperator, secondNumber); 
        displayVal.innerHTML = currentTotal;
        firstNumber = currentTotal; 
        secondNumber = null; 
        currentOperator = event.key;
    } else if (!firstNumber && !secondNumber) {
        firstNumber = numberHolder;
        currentOperator = event.key; 
    } 

    numberHolder = "";
    clearHolder = 0;
}

// Number Display functions 

function numberDisplay() {

    if (!numberHolder) { 
        displayVal.innerHTML = ""
    } 

    displayVal.innerHTML += event.target.innerHTML;
    numberHolder += event.target.innerHTML;
    clearHolder = 0; 
}

function numberDislayKeyboard(){
    if (!numberHolder) { 
        displayVal.innerHTML = ""
    } 

    displayVal.innerHTML += event.key;
    numberHolder += event.key; 
    clearHolder = 0;
}

// Eqauals     

function equals(){
    secondNumber = numberHolder; 
    currentTotal = operate(firstNumber, currentOperator, secondNumber); 
    displayVal.innerHTML = currentTotal;
    firstNumber = currentTotal; 
    currentOperator = "=";
    secondNumber = null; 
    numberHolder = null;
    clearHolder = 1; 
}

// decimal point? 

/* if ((numberHolder.match(/./g)||[]).length >= 2){
    numberHolder = numberHolder.substring(0, numberHolder.length - 1);
}
*/ 