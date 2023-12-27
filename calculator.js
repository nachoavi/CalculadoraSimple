
let displayValue = '';
let display = document.getElementById('display');

function appendValue(value){
    displayValue += value;
    display.innerText = displayValue;
}


function calculate() {
    try {
        displayValue = eval(displayValue);
        display.innerText = displayValue;
    } catch (error) {
        display.innerText = 'Error';
    }

}

function delNumber() {
    displayValue = displayValue.slice(0,displayValue.length - 1);
    display.innerText = displayValue
}

function clearDisplay() {
    displayValue = '';
    display.innerText = displayValue

}

