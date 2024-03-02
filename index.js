const inputField = document.querySelector("input");
const resultElement = document.querySelector('.result');
const listItems = document.querySelectorAll('li');


document.addEventListener("DOMContentLoaded", function() {
    // Adding click event listeners to all list elements
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Handle backspace button
            if (this.textContent.trim() === "<=") {
                // Delete the last character from the input field
                inputField.value = inputField.value.slice(0, -1);
            }
            else if(this.textContent.trim() === "C"){
                inputField.value = "";
                resultElement.textContent = "";
            }
            else {
                // Append the clicked item's text to the input field
                inputField.value += this.textContent.trim();
            }
        });
    });
});
document.querySelector('.submit').addEventListener('click', function() {
    // Evaluate the expression and display the result
    try {
        const result = eval(inputField.value);
        resultElement.textContent = result;
    } catch (error) {
        resultElement.textContent = 'Error';
    }
});