// explaining async await

/*
Promise.resolve('chai) == async function name() {return chai};

await =>  can suspend asynchronous function while we wait for awaited value return a resolved promise.
after await, the rest of the async function gets run in microtask.
*/

// // Example one
// const one = () => Promise.resolve("one");

// async function test() {
//     console.log("Inside the function");
//     const result = await one();
//     console.log(result);
// }

// console.log("Before calling the function");
// test();
// console.log("After calling the function ");

/* The output will be Before calling test
2 Inside the function
3 After calling the function
4 result: one -> as it is written after await, it will go to microtask queue
*/

// Example two
console.log("111, Script start"); //Synchronous code

setTimeout(function() {
    console.log("8888, Set Timeout") // Micro task
},0);

new Promise((resolve, rejected) => {
    console.log("2222, Promise constructor"); // Synchronous code inside promise constructor
    resolve("6666, Promise Resolved");
})
.then(function(res) {
    console.log(res); //Micro task 
});

async function asyncFunc() {
    console.log("3333, Async function start"); // synchronous part of the async function
    await new Promise((resolve) => {
        console.log("4444, Promise inside async function");
        resolve("Async/Await resolved");
    });
    console.log("7777, Async function end"); // This line is treated as a micro task que due to the await
}

asyncFunc();

console.log("5555, Script end"); // Synchronous code

/*
1 Script Start.
2 Promise Constructor
3 async function start
4 Promise inside async function
5 Script end
6 Promise resolved
7 Async function end
8 Set Timeout
*/