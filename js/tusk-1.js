////////////// ЗАДАЧА 1///////////??/

// Вариант: 1......................
let logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

for(let i = 0; i < logItems.length; i++){

  logItems[i] = (i+1) + " - " + logItems[i];

}
console.log(logItems.join('\n'));

// Вариант: 2......................

 logItems = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for(let i = 0; i < logItems.length; i++){

  console.log(`${i+1} - ${logItems[i]}`);
  
}
// ВАРИАНТ: 3.....................

const logItems = function(array){
  for (let i = 0; i < array.length; i++){
    console.log(`${i+1} - ${array[i]}`);
  }
} 

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);