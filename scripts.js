// script.js
const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function negate() {
    display.value = -eval(display.value);
}

document.addEventListener('keypress', (event) => {
    const key = event.key;

    if(/[0-9+\-*/.^()]/.test(key)) {
        appendToDisplay(key);
    } else if(key == 'Enter') {
        calculate();
    }
});