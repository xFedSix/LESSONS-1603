// new Function

// let func = new Function([arg1, arg2, ..., argN] {});

// let sum = new Function("a", "b", "return a + b");

// console.log(sum(5, 10));

// let fullName = new Function("name", "surname", "return `${name} ${surname}`");

// console.log(fullName("Ivan", "Ivanov"));

// setTimeout

// function showMessage() {
//     console.log("Hello setTimeout");
// }
// setTimeout(showMessage, 5000);

// function showMessage() {
//     console.log("Hello setTimeout")
// }
// setTimeout(() => {
//     console.log("Hello setTimeout");
// }, 5000);

// function showMessage(phrase) {
//     console.log(phrase);
// }
// // setTimeout(showMessage, 4000, "Hello from parametrs");

// let timerID = setTimeout(showMessage, 4000, "Hello from parametrs");
// console.log(timerID);

// // остановить вызов
// clearTimeout(timerID);

// setInterval

// function showMessage(phrase) {
//     console.log(phrase);
// }

// setInterval(showMessage, 3000, "from interval");

// let timerID = setInterval(() => {
//     console.log("Hello");
// }, 3000);

// // console.log(timerID);


// setTimeout(() => {
//     clearInterval(timerID);
//     console.log("stop");
// }, 10000);

// let timerID = setTimeout(function tick() {
//     console.log("tick");
//     timerID = setTimeout(tick, 5000);
// }, 2000);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// console.log(3);

// function firstMassage() {
//     console.log(1);
//     console.log(2);
// };

// function secondMassage() {
//     console.log(3);
//     firstMassage();
// }
// secondMassage();

// console.log(1);
// console.log(2);
// function timer() {
//     console.log(3);
// };

// setTimeout(() => {
//     console.log(4);
// }, 5000);

// setTimeout(timer, 2000);
// console.log(5);


// this === window
function showMessage() {
    console.log("Hello", this);
};

const student = {
    name: "Ivan",
    age: 30,
    sayHelloFromWindow: showMessage.bind(window),
    logInfo: function(surname) {
        console.log(`Name: ${this.name} ${surname}`);
    }
}

const person = {
    name: "Stepan",
    age: 44,
}
// student.logInfo();
// student.logInfo.bind(person, "Ivanov")();
// student.logInfo.call(person, "Ivanov");
// student.logInfo.apply(person, ["Ivanov"]);

// showMessage();
// student.sayHelloFromWindow();
// student.logInfo();

