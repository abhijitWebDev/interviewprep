// Javascript is a single threaded language, still UI never gets stuck.
// The behaviour is asynchronous, non-blocking . This comes from event loop.

const one = () => console.log("First");

// const two = () => setTimeout(() => {
//     console.log("Second");
// }, 5000);
const two = () => console.log("Second");

const three = () => console.log("Third");


two();
one();
three();