// const debounce = (fn, ms) => {
// 	let timeoutId;
// 	return function () {
// 		const fnCall = () => {fn.apply(this, arguments)}
// 		clearTimeout(timeoutId)
// 		timeoutId = setTimeout(fnCall, ms)
// 	};
	
// }


// function onChange(event) {
// 	console.log(event.target.value);
// }

// onChange = debounce(onChange, 1000)

// document.getElementById('search').addEventListener("keyup", onChange);

// const number = 200;
// const material = "block";

// localStorage.setItem('blockMaterial', material);

// localStorage.setItem('number', number.toString());
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.clear();

// const car ={
// 	color: "red",
// 	model: "Kia",
// 	prize: 20000,
// }

// localStorage.setItem("car", JSON.stringify(car));

// const auto = localStorage.getItem('car');


// window.addEventListener('storage', event => {
// 	console.log(event);
// })

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", event => {
	jump();
})
function jump() {
	if (dino.classList != "jump") {
		dino.classList.add("jump")
	}
	setTimeout(function() {
		dino.classList.remove('jump')
	}, 800)
}

let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('dino'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('cactus'));

	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		alert ("Game Over");
	}
},10)
