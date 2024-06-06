// what are promises?
/*
Promises are placeholders that can resolve and reject in future.
state/status and result/value are the two major factor in Promises
You cannot access these object,
state/status are of three types Pending, Rejected, Fulfilled.
new Promise(() => res("fulfilled, "Success")) -> this is a synchronous operation.
when we use .then() -> this is a asynchronous operation.
new Promise(() => rej("rejected,"Failure"))

------ getting data ----------
getDataFromApi('url)
.then(data => console.log(data) ) -> resolve case
.catch(error => console.log(error)) -> rejected case
.finally(() => console.log('all done'))

Promise chaining
Promise.resolve(2)
.then(res => res + 3) -> first output which is 2, it will be input of this then, here the output will be 5
.then(res => res + 5) -> value will be 10
.then(res=>res * 2) -> output will be 20

Most important
Task Queue -> setTimeout, setInterval, setImmideate, I/O operation, UI rendering, HTTP request.
Micro task queue -> Promises handleres then(), catch(), finally(), queue MicroTask(), Mutation observer

Microtask can return new microtask 
callstack && microtask == empty , then it will execute task queue
*/

// example
console.log('start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve('Promise')
.then(res => console.log(res));

console.log('end');

// execiton start, end, Promise and Timeout
