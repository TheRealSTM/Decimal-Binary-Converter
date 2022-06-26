
const convertValueButton = document.getElementById("convert");
const errorSpan = document.getElementById("error");
const binarySpan = document.getElementById("binary");
const EMPTY_SPAN = "";
const ERROR_MESSAGE = "Please enter a positive decimal number into the Decimal field";
convertValueButton.addEventListener("click", () => processConvertValue());

function processConvertValue() {
    const decimalValue = Number(document.getElementById('decimal').value);
    if (!decimalValue || decimalValue % 1 !== 0 || decimalValue < 0) {
        errorSpan.innerText = ERROR_MESSAGE;
        binarySpan.innerText = EMPTY_SPAN;
    } else {
        errorSpan.innerText = EMPTY_SPAN;
        binarySpan.innerText = decimalValue.toString(2);;
    }
}
