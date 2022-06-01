// Map

const user = {
  name: "Ivan",
  age: 30,
  isAdmin: false,
};

// const entries = [
//   ["Name", "Ivan"],
//   ["age", 30],
//   ["isAdmin", false]
// ]
// console.log(user);
// // Делает из объекта масив
// console.log(Object.entries(user));

// console.log(entries);
// // Делает из масива объект
// console.log(Object.fromEntries(entries));

const entries = [
  ["Name", "Ivan"],
  ["age", {isAlive: true, year: 1992}],
  ["isAdmin", false]
]
const ourMap = new Map(entries);
// console.log(ourMap);

// ourMap.get("age");
// console.log(ourMap.get("age").isAlive);

// Set добовляет в коллекцию
// ourMap
//   .set("isDriver", true)
//   .set({street: "Kolasa", number: 23}, "minsk")
//   .set(NaN, "NaN");
// console.log(ourMap);

// ourMap.delete(NaN);

// console.log(ourMap.has("age"));

// ourMap.size();
// ourMap.clear();

// Доступ к ключ и value
// for (let entry of ourMap.entries()) {
//   // console.log(entries);
//   // console.log(entry[1]);
// }

// for (let value of ourMap.values()) {
//     console.log(value);
// }

// for (let keys of ourMap.keys()) {
//   console.log(keys);
// }

// ourMap.forEach((value, key, map) => {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// })

// ... оператор рест делает масив из коллекции
// const arr = [...ourMap];
// console.log(arr);

// const arr2 = array.from(ourMap);

// const mapObj = Object.fromEntries(ourMap.entries());


// const students = [
//   {name: "Ivan"},
//   {name: "Alex"},
// ]

// const visited = new Map()
//   .set(students[0], new Date())
//   .set(students[1], new Date());

// function showLastVisit(ourStudents) {
//   return visited.get(ourStudents);
// }
//  console.log(showLastVisit(students[1]));


// let nums = [1, 2, 2, 2, 3, 4, 4, 5];
// const mySet = new Set(nums) 
// console.log(mySet);

// // mySet.add(66);
// // mySet.delete(2);
// // mySet.has();
// // mySet.clear();

// // console.log(mySet.keys(), "keys");
// // console.log(mySet.values(), "values");
// // console.log(mySet.entries(), "entries");

// function unique(arr) {
//   // return [...new Set(arr)];
//   // return [new Set(arr)];
//   // return Array.from(new Set(arr));
// }
// console.log(unique(nums));

// const phones = {
//   samsung: 300,
//   iPhone: 400,
//   nokia: 200,
// }
// let ourPrize = 
// Object.fromEntries(
//   Object.entries(phones).map(([key, value]) => {
//   return [key, value * 2];
// })
// )

// console.log(ourPrize);

// const salary = {
//     "Ivan": 300,
//     "Alex": 400,
//     "Oleg": 200,
//   }

// function sunSalary(obj) {
//   let sum = 0;
//   for (let sal of Object.values(obj)){
//     sum += sal;
//   };
//   return sum;
// }
// console.log(sunSalary(salary));

let date = new Date().toLocaleDateString();
console.log(date);

// let year =date.getFullYear();
// let month = date.getMonth();
// let day = date.getDay();

// let dateNow = Date.now();

// let n = 1612544899941
// let date = new Date(n);
// console.log(date);

// function showDate(date) {
//   let year =date.getFullYear();
//   let month = date.getMonth();
//   let day = date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`;
//   return `${day} ${month} ${year}`
// }
// console.log(showDate(date));
