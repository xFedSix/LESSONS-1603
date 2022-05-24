// console.log(Hello)

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   console.log ( i );
//   i++;
// }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   console.log ( i );
//   i++;
// }

// do {
//     alert( i );
//     i++;
//   } while (i < 3);

// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     console.log(i);
//   }

//   let sum = 0;

//   while (true) {
  
//     let value = +prompt("Введите число", '');
  
//     if (!value) break; // (*)
  
//     sum += value;
  
//   }
//   console.log( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
  
//     console.log(i); // 1, затем 3, 5, 7, 9
// }
  
// let a = 2 + 2;

//   switch (a) {
//     case 3:
//       alert( 'Маловато' );
//       break;
//     case 4:
//       alert( 'В точку!' );
//       break;
//     case 5:
//       alert( 'Перебор' );
//       break;
//     default:
//       alert( "Нет таких значений" );
// }

// switch (browser) {
//     case 'Edge':
//       alert( "Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Opera':
//       alert( 'Okay we support' );
//       break;
  
//     default:
//       alert( 'We hope' );
//   }

// let browser = prompt('Введите имя браузера', '')
// if (browser === 'edge'){
//     console.log("Edge!");
// }
// else if( browser === 'Chorme') {
// console.log(browser === 'Chrome');
// }
// else if (browser === 'Opera'){
// console.log(browser === 'Chrome');
// } else {
//     console.log('We hope');
// }

// function showMessage() {
//     console.log( 'Всем привет!' );
// }

// showMessage();

// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();

// alert( userName ); // Петя, значение внешней переменной было изменено функцией

// let userName = "Ivan";
// let userAge = 30;

// function showUsername(name, age) {
//     console.log(`My name is ${name}, i'm ${age} years`)
// }
// showUsername (userName, userAge);

// function sum(a, b) {
//     return a + b;
//   }
  
// let result = sum(1, 2);
// console.log(result);

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
// let ourAge = prompt('Сколько вам лет?', 18);
// let isChecked = checkAge(ourAge);
// console.log(isChecked);
