// let arr =[1, 2, 4, 9];

// let squareArr = [];
// arr.forEach((item) => {
// squareArr.push (item ** 2);
// });

// console.log(squareArr);

// arr. forEach((item, index) => {
//   arr[index] = item ** 2;
// });

// заменяет\удаляет\добавляет элементы
// let moto = ["Я", "учу", "очень", "плохо"];
// moto.splice(2, 2, "хорошо");

// console.log(moto);

// let parfume = ["Dior", "JHG", "Killian", "BDK"];

// // parfume[parfume.length - 2] = "replica";
// parfume.splice(-2, 1, "replica");
// console.log(parfume);

// let alcohol = ["Vine", "Rum", "Vodka"];

// alcohol.splice(2, 0, "Beer");

// console.log(alcohol);

// let arr = [1, 2, 3, 4];
// // slice выводит(копирует) в новый масив
// let newArr = arr.slice(0, 2);
// console.log(newArr);

// let newFullArr = arr.slice();
// console.log(newFullArr);

// let cars1 = ["Jeep", "kia", "bmw"];
// let cars2 = ["mazda", "audi", "ford"]
// // concat объединяет масивы
// let machnes = cars1.concat(cars2);

// console.log(machnes);

// let arr = [1, 5, -2, 44, 0, Infinity];

// arr.sort((a, b) => a - b);
// let language = [
//   "1 language",
//   "1",
//   "Язык 1",
//   "Language 1",
//   "1 язык",
//   "язык",
// ]

// console.log(language);
// language.sort();

// console.log(language);

// let numbers =[1, 3, 5, 128];

// let squareNumbers = numbers.map(item => {
//   return item ** 2;
// });

// console.log(squareNumbers);

// let sports = ["football", "tenis", "golf"];

// let sportsLenght = sports.map(item, index => {
//   return item + index;
// });

// console.log(sportsLenght);

let students = [
  {
    name: " Ivan",
    age: 30,
  },
  {
    name: "Oleg ",
    age: 20,
  },
  {
    name: " Anna",
    age: 92,
  }
]
// trim уберает пробелы вконце и начале
let names = students.map(item => {
  return item.name.toUpperCase().trim();
});

// let names2 = [];
// students.forEach(item => {
//   names2.push(item.name.toUpperCase());
// });
console.log(names);







