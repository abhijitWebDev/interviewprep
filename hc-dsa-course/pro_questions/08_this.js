// This -> this.window(browser), this.global(empty object Node.)

// Regular function with this
function getThis() {
    console.log("'1111,This");
}

const obj = {
    getThis,

};

getThis();
obj.getThis();

// arrow function in browser
const getThis = () => {
    console.log("'1111,This");
}

const objNew = {
    getThis,

};

getThis();
objNew.getThis();
