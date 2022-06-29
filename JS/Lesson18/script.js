// const htmlElement = document.documentElement
const bodyElement = document.body

// const firstChildNode = bodyElement.firstChild
// const lastChildNode = bodyElement.lastChild

// console.log(bodyElement);
// console.log(firstChildNode);
// console.log(lastChildNode);

// const childNodes = bodyElement.childNodes
// console.log(childNodes);

// console.log(bodyElement.hasChildNodes);

// for (let node of childNodes) {
//     console.log(node);
// }

// const previousSiblingNode = bodyElement.previousSibling
// const nextSiblingNode = bodyElement.nextSibling
// const parentNode = bodyElement.parentNode

// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// const childNodes = bodyElement.childNodes
// console.log(childNodes);

// const bodyChildren = bodyElement.children
// console.log(bodyChildren);

// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild

// console.log(firstChild);
// console.log(lastChild);

// firstChild.style.backgroundColor = "red";


// // const previousSibling = bodyElement.previouElementSibling
// // const nextSibling = bodyElement.nextElementSibling
// // const parent = bodyElement.parentElement

// // console.log(previousSibling);
// // console.log(nextSibling);
// // console.log(parent);

// const elemOne = document.querySelectorAll(".lesson__list")
// console.log(elemOne);
// const elemTwo = document.querySelectorAll("li")
// console.log(elemTwo[2]);


// const elemThree = document.querySelectorAll("li.lesson__item-list")
// console.log(elemThree);

// const elemFour = document.querySelectorAll(".lesson__item>li")
// console.log(elemFour);

// const elemFive = document.querySelectorAll(".lesson__list .lesson__text")
// console.log(elemFive);

// const elemSix = document.querySelectorAll(".lesson__list, .lesson__text")
// console.log(elemSix);

// const elemSeven = document.querySelectorAll("#listItem")
// console.log(elemSeven);

// const elemEight = document.querySelectorAll("[name]")
// console.log(elemEight);

// const lessonList = document.querySelector(".lesson__list")
// console.log(lessonList);

// const elem = document.getElementById("listItem")
// console.log(elem);

const textElement = document.querySelector(".lesson__text")
console.log(textElement);
const textElementContent = textElement.innerHTML
console.log(textElementContent);

textElement.innerHTML = `Another text`;