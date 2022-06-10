// Rest оператор - остаточные параметры

// function showPlayer(name, surname, ...info) {
//   console.log(`${name} ${surname}`, "params");
//   console.log(info, "rest");
// }
// showPlayer("Denis", "Berg", "Amsterdam", 1963);

// spread оператор расширения

// let date = [1970, 0 , 2];
// let d = new Date(...date);
// console.log(d);

// let arr = [1, 2, 3, 4, 5, 5, 6, 6, 6];
// let unique = [...new Set(arr)];
// console.log(unique);

// let oldPlayer = ["Arnaldo", "Henry", "Pires"];
// let currentPlayers = ["Saka", "Mount", "Walker"];

// let players = [...oldPlayer, ...currentPlayers];
// console.log(players);


// const mySkills = ["HTML", "CSS"];

// mySkills.push.apply([mySkills, "JavaScript", "React"]);
// console.log(mySkills);

// mySkills.push(...["JavaScript", "React"]);
// console.log(mySkills);

// дескруетуризация

// const mySkills = [
//   {course: "HTML", mark: 9},
//   {course: "JS", mark: 8},
// ];
// let newArr = mySkills.map(({course, mark}) => {
//   console.log(mark);
//   return course.toLowerCase();
// });

// console.log(newArr);


// const [numFirst, ...oterNames] = [1, 2, 3, 5, 9];

// console.log(numFirst);
// console.log(oterNames);

// let user = {
//   name: "Alex",
//   age: 30,
//   id: 7,
// }

// const {name, ...other} = user;
// console.log(name);
// console.log(other);


// Функции замыкания

// function createFunction(x) {
//   return function() {
//     console.log(x);
//   }
// }
// console.log(createFunction(100));
// const newFunction = createFunction(100);
// newFunction();



// function calcSum(a) {
//   return function(b) {
//     return a+ b;
//   };
// };

// const addTen = calcSum(10);
// console.log(addTen(5));


// function createProfileInfo(groupNumber) {
//   return function(fullName) {
//     return `Работу сделал ${fullName} из группы ${groupNumber}`
//   }
// }

// const groupSevenStudent = createProfileInfo(7);
// console.log(groupSevenStudent("Федор"));


