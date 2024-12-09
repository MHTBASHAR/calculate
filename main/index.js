let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value; // Replace initial zero
    } else {
        display.innerText += value; // Append value
    }
}

function clearDisplay() {
    display.innerText = '0'; // Clear display
}

function calculate() {
    try {
        // Replace any instances of the custom operator with correct symbols
        let result = eval(display.innerText.replace('÷', '/').replace('×', '*').replace('**', '^'));
        display.innerText = result; // Display result
    } catch (error) {
        display.innerText = 'Error'; // Handle errors
    }
}