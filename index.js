import data from "./data/index.js";

// Display password
const passwordDisplay = document.getElementById("password-display");
passwordDisplay.innerText = "Rethink Academy - Password Generator";
passwordDisplay.className = "password-display password-display-off";

// Input Size
const sizePassword = document.getElementById("password-length");

// Checkbox Options
const uppercaseButton = document.getElementById("uppercase");
const lowercaseButton = document.getElementById("lowercase");
const numbersButton = document.getElementById("numbers");
const specialCharsButton = document.getElementById("specialChars");

// Button Generator
const buttonElement = document.getElementById("generate-password");

function handleOptions() {
  return [uppercaseButton, lowercaseButton, numbersButton, specialCharsButton]
    .filter((element) => element.checked)
    .map((element) => data[element.id]);
}

function generateRandomPassword(size, options) {
  // Password gerado
  let response = "";

  // Todos os itens do array de opcoes.
  const allChars = [];
  options.map((option) => allChars.push(...option));

  // Fazer Looping no array options e gerar um numero randomicamente para escolher o caracter para a senha.
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    response = response.concat(allChars[randomIndex]);
  }

  return response;
}

buttonElement.addEventListener("click", () => {
  // Handle with options
  const options = handleOptions();

  // Validando se alguma opcao foi escolhida.
  if (options.length <= 0) {
    passwordDisplay.innerText = "Por favor, Selecione uma opção!";
    return;
  }
  let passwordText = "";
  passwordText = generateRandomPassword(sizePassword.value, options);

  passwordDisplay.innerText = passwordText;
});
