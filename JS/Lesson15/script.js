// Prototype

// function Person(first, last, age) {
//     this.name = {
//         first: first,
//         last: last,
//     }
//     this.age = age
// }

// let personIvan = new Person("Ivan", "Pupkin", 42);

// let student = {
//     name: "Ivan",
//     age: 30,
//     course: "JS",
// }
// let user = {
//     age: 42,
//     name: "Tanya",
// }

// let person = {
//     name: "Sasha",
// }

// user.__proto__ = student;
// person.__proto__ = user;

// console.log(user);
// console.log(student);
// console.log(user.course);
// console.log(person.course);


// let student = {
//     course: "JS",
// }

// function Develop(name) {
//     this.name = name
// }
// Develop.prototype = student

// let newDev = new Develop("IVAN");
// console.log(newDev);

// const personIvan = new Object( {
//     name: "Ivan",
//     age: 30,
//     welcome() {
//         console.log("Welcome");
//     }
// })

// Object.prototype.sayHello = function() {
//     console.log("Hello");
// }

// const personLev = Object.create(personIvan);
// console.log(personLev);

// personLev.name = "Lev";
// console.log(personLev);

// let string = new String("String");

// console.log(string);

// let num = new Number(5);
// console.log(num);