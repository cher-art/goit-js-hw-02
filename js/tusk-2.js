/////////////// ЗАДАЧА 2/////////////////

const calculateEngravingPrice = function(message, pricePerWord) {
  let messive = message.split(' ');
  console.log(messive);
  let i = messive.length;
  console.log(i);
  let sum = pricePerWord * i;
  console.log(sum);
  return sum;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);