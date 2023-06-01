const form = document.getElementById("formulario");
const firstNumber = document.getElementById("firstNum");
const secondNumber = document.getElementById("secondNum");
const messageField = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (secondNumber.value == "" || firstNumber.value == "") {
    messageField.innerText = "Preencha os campos acima.";
    messageField.style.color = "#F20100";
  } else if (parseInt(firstNumber.value) < parseInt(secondNumber.value)) {
    messageField.innerText = `Formulario válido: ${secondNumber.value} é maior que ${firstNumber.value}.`;
    messageField.style.color = "#10c102";
  } else if (parseInt(firstNumber.value) > parseInt(secondNumber.value)) {
    messageField.innerText = `Formulario inválido: ${secondNumber.value} é menor que ${firstNumber.value}.`;
    messageField.style.color = "#F20100";
  } else if (parseInt(firstNumber.value) == parseInt(secondNumber.value)) {
    messageField.innerText = `Formulario inválido: os números são iguais.`;
    messageField.style.color = "#F20100";
  }
});
