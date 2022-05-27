
// let students = [
//   {
//     name: "Tanya",
//     id: 20,
//     mark: 340,
//   },
//   {
//     name: "Fedor",
//     id: 33,
//     mark: 140,
//   },
//   {
//     name: "Stepan",
//     id: 50,
//     mark: 640,
//   },{
//     name: "Sasha",
//     id: 2,
//     mark: 40,
//   },
// ]
// let totalMark = 0;
// students.forEach(item => {
//   if (item.id > 30) totalMark += item.mark;
// });
// console.log(totalMark);

// let totalMark = students.filter(item => {
//   return item.id > 30;
// }).map(item => item.mark);
// let sum = totalMark[0] + totalMark[1];
// console.log(sum);

// let totalMark = students.reduce((acc, item) => {
//   if (item.id > 30) {
//     return acc += item.mark;
//   } else {
//     return acc;
//   };
// },0);
// console.log(totalMark);


// let student = [];
// students.forEach(item => {
//   if (item.mark > 200) student.push(item.name);
// });
// console.log(student);


// let studentsMarks = students.filter(item => {
//   return item.mark > 200;

// }).map(item => item.name);
// let result = studentsMarks;
// console.log(studentsMarks);

// let studentsReduce = students.reduce((acc, item) => {
//   if (item.mark > 200) acc.push(item.name);
//     return acc;
// },[]);
// console.log(studentsReduce);

let students = [
  {
    name: "Tanya",
    id: 20,
    mark: 340,
  },
  {
    name: "Fedor",
    id: 33,
    mark: 140,
  },
  {
    name: "Stepan",
    id: 50,
    mark: 640,
  },{
    name: "Sasha",
    id: 2,
    mark: 40,
  },
]

// function showAverageMark(students){
// return students.reduce((acc, item) => acc + item.mark, 0) / students.length;
// };

// let result = showAverageMark(students); 
// console.log(result);

// function showAverageMark(students) {
//   let sum = 0;
//   students.forEach(item => {
//       sum += item.mark /students.length;
//   });
//   return sum;
// };

// console.log(showAverageMark(students));

// Найти true значение
// let arr = [1, 0 , NaN, null, "string", Boolean]
// function showTrue(arr) {
//   return arr.filter(item => item);
//   };
// console.log(showTrue(arr));

// Уникальное значение(убрать повторяющиеся)

let unique = [1, 2, 3, 4, 3, 2, 1];
function getUniqueValues(arr) {
    return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log(getUniqueValues(unique));

let newArr = [];
unique.forEach(item => {
  if (!newArr.includes(item)) {
    newArr.push(item);
  };
});
console.log(newArr);