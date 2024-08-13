const form = document.querySelector("form");
const number = form.querySelector("#number");
const result = form.querySelector("#result");
const fromBase = document.getElementById("from-base");
const toBase = document.getElementById("to-base");

fromBase.onchange = (e) => (window.fromVal = e.target.value);
toBase.onchange = (e) => (window.toVal = e.target.value);

const binaryToOctal = (num) => (result.value = parseInt(num, 2).toString(8));
const binaryToDecimal = (num) => (result.value = parseInt(num, 2).toString(10));
const binaryToHexadecimal = (num) =>
  (result.value = parseInt(num, 2).toString(16));
const octalToBinary = (num) => (result.value = parseInt(num, 8).toString(2));
const octalToDecimal = (num) => (result.value = parseInt(num, 8).toString(10));
const octalToHexadecimal = (num) =>
  (result.value = parseInt(num, 8).toString(16));
const decimalToBinary = (num) => (result.value = parseInt(num, 10).toString(2));
const decimalToOctal = (num) => (result.value = parseInt(num, 10).toString(8));
const decimalToHexadecimal = (num) =>
  (result.value = parseInt(num, 10).toString(16));
const hexadecimalToBinary = (num) =>
  (result.value = parseInt(num, 16).toString(2));
const hexadecimalToOctal = (num) =>
  (result.value = parseInt(num, 16).toString(8));
const hexadecimalToDecimal = (num) =>
  (result.value = parseInt(num, 16).toString(10));

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userNum = number.value;

  if (fromVal === "2" && toVal === "8") {
    binaryToOctal(userNum);
  } else if (fromVal === "2" && toVal === "10") {
    binaryToDecimal(userNum);
  } else if (fromVal === "2" && toVal === "16") {
    binaryToHexadecimal(userNum);
  } else if (fromVal === "8" && toVal === "2") {
    octalToBinary(userNum);
  } else if (fromVal === "8" && toVal === "10") {
    octalToDecimal(userNum);
  } else if (fromVal === "8" && toVal === "16") {
    octalToHexadecimal(userNum);
  } else if (fromVal === "10" && toVal === "2") {
    decimalToBinary(userNum);
  } else if (fromVal === "10" && toVal === "8") {
    decimalToOctal(userNum);
  } else if (fromVal === "10" && toVal === "16") {
    decimalToHexadecimal(userNum);
  } else if (fromVal === "16" && toVal === "2") {
    hexadecimalToBinary(userNum);
  } else if (fromVal === "16" && toVal === "8") {
    hexadecimalToOctal(userNum);
  } else if (fromVal === "16" && toVal === "10") {
    hexadecimalToDecimal(userNum);
  } else {
    result.value = userNum;
  }
});
