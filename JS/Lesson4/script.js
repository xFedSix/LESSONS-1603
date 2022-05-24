// let sayHi = function(message) {
//     console.log( message );
//   };
// sayHi("Hello");

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     console.log("OK");
//   }
  
//   function showCancel() {
//     console.log( "Cancel" );
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);

// let func = function(arg1, arg2) {
//     return expression;
//   };

// let func = (arg1, arg2) => expression;

// let student = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     surname: "Smith",
//     isDriver: false,
//     age: 30        // под ключом "age" хранится значение 30
//   };
//   student.isGood = true;

//   for (let key in student) {
//     console.log(key, student[key]);
//   }

//   console.log(student.name, student.age);

//   delete student.surname;

//   console.log(student.name, student.surname);
//   student.age = 36;

//   console.log(student.age);

let car = {
    color: "red",
    model: "Nissan",
}

let moto = car;

console.log(car);
console.log(moto);

car.doors = 3;

console.log(car);
console.log(moto);

