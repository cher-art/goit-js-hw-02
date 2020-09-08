///////////////////////////////// ЗАДАЧА 6////////////////////////////////////////

let input = prompt("Введите число");
const numbers = [];
let total = 0;
for (let i = 0; input !== null || input == false; i++) {
  if (i < 10) {
    console.log(input);
    break;
  }
  input = +input;
  if (!isNaN(input)) {
    numbers.push(input);
    total += input;
  } else {
    console.log("Введите число");
  }
}
console.log(numbers);
console.log(total);