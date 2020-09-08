///////////////////////////////// ЗАДАЧА 5///////////////////////////////

const checkForSpam = function(message) {
  let lowMessage = message.toLowerCase();
  if (lowMessage.includes("sale")){
    console.log(true);
  } 

  else if (lowMessage.includes("spam")){
    console.log(true);
  }
  
  else {
    console.log(false)
  }
};





/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
