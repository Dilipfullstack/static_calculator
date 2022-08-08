function clearValue() {
    document.getElementById('input-box').innerHTML = "";
}

function setValue(value) {
    document.getElementById('input-box').innerHTML = document.getElementById('input-box').innerHTML + value;
}

function calculate() {
    const valueToCalculate = document.getElementById('input-box').innerHTML;
    const valueAfterCalculate = eval(valueToCalculate);
    document.getElementById('input-box').innerHTML = valueAfterCalculate;
}