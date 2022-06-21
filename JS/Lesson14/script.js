// console.log("Запрос данных");
// setTimeout(() => {
//     console.log("Подготовка данных");
//     const backendData = {
//         status: "Done",
//         code: 200,
//     }

//     setTimeout(() => {
//         console.log("Данные получены", backendData);
//     }, 3000);
// }, 3000);

// console.log("Запрос данных");
// const ourPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Подготовка данных");
//     const backendData = {
//         status: "Done",
//         code: 200,
//     }
//     resolve(backendData);
//     }, 3000);
// })
// ourPromise.then(data => {
//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//         }, 3000);
        
//     })
//     promise2.then(modifiedData => {
//         console.log("Данные получены", modifiedData);
//     })
// })

// console.log("Запрос данных");
// const ourPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Подготовка данных");
//     const backendData = {
//         status: "Done",
//         code: 200,
//     }
//     resolve(backendData);
//     }, 3000);
// })
// ourPromise.then(data => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//         }, 3000);
        
//     })
//     .then(modifiedData => {
//     modifiedData.fromPromiseTwo = true;
//     return modifiedData;
//     })
//     .then(secondaryModifiedData => {
//         console.log("Данные получены", secondaryModifiedData);
//     })
        
// })

// console.log("Запрос данных");
// const ourPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Подготовка данных");
//     const backendData = {
//         status: "Done",
//         code: 200,
//     }
//     resolve(backendData);
//     }, 3000);
// })
// ourPromise.then(data => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true;
//         reject(data);
//         }, 3000);
        
//     })
//     .then(modifiedData => {
//     modifiedData.fromPromiseTwo = true;
//     return modifiedData;
//     })
//     .then(secondaryModifiedData => {
//         console.log("Данные получены", secondaryModifiedData);
//     })
        
// })
// .catch(error => console.log("error", error));

// ourPromise.then(data => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//         }, 3000);
        
//     })
//     .then(modifiedData => {
//     modifiedData.fromPromiseTwo = true;
//     return modifiedData;
//     })
//     .then(secondaryModifiedData => {
//         console.log("Данные получены", secondaryModifiedData);
//     })
        
// })
// .finally(() => console.log("Finally"));


// const timePause = delay => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, delay)
//     })
// }
// timePause(5000).then(() => console.log("After 5 sec"));
// timePause(1000).then(() => console.log("nv,jhvjh"));

// Promise.all([timePause(4000), timePause(2000)])
//     .then(() => {
//         console.log("All promises are worked");
//     })

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'
// function fetchDataFromBack(){
//     return delay(3000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchDataFromBack()
// .then(data => console.log(data))
// .catch(e => console.error(e))

async function fetchDataFromBack() {
    console.log("Fetch started");
    // await delay(2000);
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log("DATA", data);
    
}
fetchDataFromBack()

let arr = {};
console.log(arr);

// async function fetchDataFromBack() {
//     try {
//     const response = await fetch(url);
//     console.log(response);
//     const data = await response.json();
//     return data;
//     }catch (e) {
//         console.log(e);
//     }
    
// }
// fetchDataFromBack();

