/* difference between call bind and apply */

const person = {
    name: 'Alice',
    age: 25
}

function introduce(interest, hobby) {
    console.log(`My name is ${this.name} and I am ${this.age} years old. I like ${interest} and ${hobby}`);
};

// call : Immideatly invoked function with specified this
introduce.call(person, 'math', 'chess');



// apply : same as call but arguments are passed in arrays
introduce.apply(person, ['Science', 'Painting']);



// bind: Returns a new function, when called has its own this value , set to provided value
const boundIntroduce = introduce.bind(person, 'literature');
boundIntroduce('writing');

