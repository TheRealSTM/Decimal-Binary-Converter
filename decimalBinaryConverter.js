
const convertDecimalToBinaryValueButton = document.getElementById("decimal-binary-convert");
const decimalBinaryErrorSpan = document.getElementById("decimal-binary-error");
const decimalBinaryOutputSpan = document.getElementById("decimal-binary-output");
const EMPTY_SPAN = "";
const DECIMAL_BINARY_INPUT_ERROR_MESSAGE = "Please enter a positive decimal number into the Decimal field";
convertDecimalToBinaryValueButton.addEventListener("click", () => processConvertValue());

function processConvertValue() {
    const decimalValue = Number(document.getElementById('decimal-input').value);
    if (!decimalValue || decimalValue % 1 !== 0 || decimalValue < 0) {
        decimalBinaryErrorSpan.innerText = DECIMAL_BINARY_INPUT_ERROR_MESSAGE;
        decimalBinaryOutputSpan.innerText = EMPTY_SPAN;
    } else {
        decimalBinaryErrorSpan.innerText = EMPTY_SPAN;
        decimalBinaryOutputSpan.innerText = decimalValue.toString(2);;
    }
}
