let lorem = "kjhgskdhf g;ds.bg; lsdfhf g.ksdfjhfg;xc hjvlfkj hy;flbxcv,g xcv.zb";

// console.log(lorem.indexOf("lsdfhf",2));
// console.log(lorem);

// console.log(lorem.lastIndexOf("lsdfhf"));

// console.log(lorem.includes("lsdfhf"));

// let sublorem = lorem.slice(0, 2);
// console.log(sublorem);
// // выводит количество символов
// console.log(lorem.substring(0, 4));

// let group = ["string", 23, {name: "ivan"}, true];

// console.log(group);
// // console.log(group[1]);

// group.pop();
// console.log(group);

// group.push("new element");
// console.log(group);

// group.shift();
// console.log(group);

// group.unshift("new element");
// console.log(group);

// let arr = ["a", "b", "c"];

// arr.forEach((item, index, array) => {
//   console.log(item);
// })



// let sum = 0;
// arr.forEach((item) => {
// sum += item;
// });
// console.log(sum);

// let copyArr = [];
// arr.forEach((item) => {
//   copyArr.push(item);
// // console.log(`number ${item} with index ${index}`)
// });

// console.log(copyArr);

// let arr = [10, 20, 45];

// if (arr.includes(10)) {
//   console.log("Yes,Include");
// }

// let arr = [-1, 10, 23, -3, 0, -2];

// let arr2 = [];
// arr.forEach((item) => {
//   if (item < 0 && item % 2 ===0) arr2.push(item);
// })
// console.log(arr2);

// let strArr = ["one", "two", "five"];
// strArr.forEach((item) => {
//   if (item.length === 3) console.log(item);
// })

// let arr = [-1, 10, -23, -3, 0, -2];
// let minus = 0;
// arr.forEach(item => {
//   if (item < 0) minus++;
// })
// console.log(minus);

// let harryPotter = [
//  {name: "Harry",
//   age: 10,
// },
// {
//   name: "Ronald",
//   age: 11,
// },
// {
//   name: "Drago",
//   age: 11,
// }
// ]
// // находит первый и возвращает весь объект
// let result = harryPotter.find((item) => {
//   return item.name === "Harry";
// });
// console.log(result);

// let cars = [
//   {
//   color: "black",
//   model: "nissan"
//   },
//   {
//   color: "red",
//   model: "mazda"
//   },
//   {
//   color: "black",
//   model: "kia"
//   },
// ]
// let blackCars = cars.filter((item) => {
//   return item.color === "black";
// });

// console.log(blackCars);

let students = [
  {
    name: "Fiodar ",
    isHere: true,
    mark: 100,
  },
  {
    name: " stepan",
    isHere: true,
    mark: 70,
  },
  {
    name: "stepan",
    isHere: false,
    mark: 40,
  },
]
let goodStudents = students.filter((item) => {
  return item.isHere === true && item.mark >=60;
});

console.log(goodStudents);

