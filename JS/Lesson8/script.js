// let numbers = [1, 2, 3, 4, 5];

// let numbersSquare = numbers.map(item => item ** 2);

// console.log(numbersSquare);

// let sum = 0;
// numbers.forEach(item => {
//   sum += item;
// })
// console.log(sum);

// let value = arr.reduce(function(previousValue, item, index, array) {
  
// }, [initial]);

// let sum = numbers.reduce((acc,item) => {
// return acc += item;
// }, 0); 
// console.log(sum);

// let numberBeforeNull = [1, 4, -2, 5, 0, 15, 6];

// let sum = numberBeforeNull.reduce((acc, item) => {
//   let sunToNull = 0;
//   if (item === 0) {
//     sunToNull = acc;
//     return acc;
//   }
//     return acc += item;
// });
// console.log(sunToNull);

// let numbers = [1, 2, 3, -2, 3, 2, 9, 2, 4];
// 1 способ
// let sum = 1;
// let result = numbers.reduce((acc, item, index) => {
//   if (acc < 10) {
//     sum ++;
//   }
//   return acc += item;
// });
// 2 способ

// let sum = 1;
// let result = numbers.reduce((acc, item, index) => {
//   if (acc > 10) {
//     console.log(sum);
//     return;
//   }
//   sum ++;
//   return acc += item;
// });

let students = [
  {
    name: Tanya,
    id: 20,
    mark: 100,
  }
]
