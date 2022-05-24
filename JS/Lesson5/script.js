// function calcSum(numOne, numTwo, more, less) {
//     let numSum = numOne + numTwo;
//     if (numSum >3) {
//         more()
//     }else {
//         less()
//     }
// }
// function showMore() {
//     console.log("More");
// }
// function showLess() {
//     console.log("less");
// }
// calcSum(2, 5, showMore, showLess);

// let user = {
//     name: "Иван",
//     surname: "Ivanov",
//     age: 30,
//     adress: {
//         sity: "Minsk",
//         street: "Kolasa",
//         numberOfHouse: 40,
//     },
//   };

//   console.log(user.name);
//   console.log(user.adress.sity);

  // let userClone = Object.assign({}, user);

  // user.name = "Oleg";


//   console.log(user);
//   console.log(userClone);

  // user.adress.sity = "Brest";

  // console.log(user);
  // console.log(userClone);
  
  // let user = {
  //   name: "Иван",
  //   surname: "Ivanov",
  //   age: 30,
  //   sayHi() {
  //   console.log(`Hello from ${this.name} ${this.surname}`);
  //   },
    
  //   adress: {
  //     sity: "Minsk",
  //     street: "Kolasa",
  //     numberOfHouse: 40,
  //   },
  // };

  
  // function sayHello() {
  //   console.log(window);
  // }

  // user.sayHi();

  // let user = {
  //   firstName: "Илья",
  //   sayHi() {
  //     let arrow = () => alert(this.firstName);
  //     arrow();
  //   }
  // };
  
  // user.sayHi();

  function User(name) {
    this.userName = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася");
  
  console.log(user);
  