// const Animal = function({name, color}) {
//     this.name = name,
//     this.color = color

//     // this.voice = function() {
//     //     console.log("Voice from: ", this.name);
//     // }
// }

// // Animal.prototype.voice = function() {
// //     console.log("Voice from: ", this.name);
// // }

// const dog = new Animal({name:"Chivas", color:"white"});

// // dog.voice();

// const Cat = function(options) {
//     Animal.apply(this, arguments)
//     this.hasTail = options.hasTail,
//     this.type = "cat"
// }


// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// Animal.prototype.voice =function() {
//     console.log("This sound from:", this.name);
// }
// Cat.prototype.voice = function() {
//     console.log(this.name, "Says miu");
// }
// const cat = new Cat({name: "Felix", color: "Black", hasTail: true})

// console.log(cat);

class Animal {
    constructor(options) {
        this.name = options.name,
        this.color = options.color
    }
    voice() {
        console.log("Voice from", this.name);
    }
}
const dog = new Animal({name:"Chivas", color:"white"});

class Cat extends Animal{
    constructor(options) {
        super(options)
        this.hasTail = options.hasTail
        this.type = "Cat"
    }
    voice() {
        super.voice()
        console.log(this.name, "Says miu");
    }
}
const cat = new Cat({name: "Felix", color: "Black", hasTail: true})

Object.prototype.information = function() {
    console.log("This is object", this);
}
// Object.prototype.information = () => {
//     console.log("This is object", this);
// }
// cat.information()

// Array.prototype.ourMap = function () {
//     return this.map.apply(this, arguments)
// }
// console.log([1, 3, 5, -7].ourMap(item => item ** 2))

// String.prototype.toTag = function(tagName) {
//     return `<${tagName}>${this}</${tagName}>`
// }
console.log("String".toTag("div"));
