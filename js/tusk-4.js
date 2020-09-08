// ////////////ЗАДАЧА 4////////////////
const formatString = function(string) {
  let synbol = string.length;
  console.log(synbol);
  if(synbol < 40){
    return string;
  }
  if(synbol > 40){
    let cutString = string.substr(0, 40) + '...';
    return cutString;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);