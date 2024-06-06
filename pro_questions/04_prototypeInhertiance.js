/* Linking an prototype of a parent object to child object to share and utilize the properties of the parent class.
Single inhertiance = xyz__proto__ can inherit only single class.
multiple inhertiance = abc__proto__.__proto__ can inherit multiple.
*/

// basic example of proto , old way of creating inhertiance
// let faang = {
//     name: "google",
//     salary: function() {
//         console.log("500k salary");
//     },

// };

// let engineer = {
//     empId: 12231,
//     task: function() {
//         console.log("task assigned");
//     },
// };

// engineer.__proto__=faang;

// console.log(engineer);
// engineer.salary();

let faang = {
    name: "google",
    salary: function() {
        console.log("500k salary");
    },

};

let engineer = Object.create(faang, {
    taskAssigned:{value:2},
})

console.log(engineer);
engineer.salary();

// few methods of prototypes Object.get Prototypeof, Object.setProtoTypeOf.

// Prototype Shadowing
/*
name:'chai'   that will be the output name:'chai';
__proto__:{name:'tea'}
__proto__:{__proto__:{type:"Ginger"}} .type="Ginger"

* Monkey patching
do not add Array.prototype.custom length.
*/

