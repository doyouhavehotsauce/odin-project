class Calculator {

    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand; 
        this.clear();
    }
        clear() {
            this.previousOperand = '';
            this.currentOperand = '';
            this.operation = undefined;
        }

        delete() {

        }
        chooseOperation(operation) {

        }
        appendNumber(num) {

        }
        makeComputation() {

        }
        updateDisplay() {

        }

}


let numInput = [];
let numInputString;
const numButtons = document.querySelectorAll('[data-num]');
const operationButton = document.querySelectorAll('[data-operand]');
const dec = document.querySelectorAll('[data-decimal]');
const equals = document.querySelectorAll('[data-equals]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const clear = document.querySelector('[data-clear]');
const back = document.querySelector('[data-back]');


const calculator = new Calculator(previousOperand, currentOperand);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
    })
})


















