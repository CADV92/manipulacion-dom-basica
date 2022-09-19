const form = document.querySelector("#form")
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

form.addEventListener("submit", sumOperator);

function sumOperator(event) {
    event.preventDefault();
    let sum = parseInt(num1.value) + parseInt(num2.value);
    result.innerHTML = `Resultado: <b> ${sum}`;
}