console.log("hi");
let name = "bob";
let namelength = name.length
console.log(name + " is " + namelength);



console.log(name[1]);

let names = [];
names.push("BOBO");
names.push(23132);

console.log(names[0]);
console.log(names[1]);

let nestedArray = [[12, 12], [23, 32]];

console.log(nestedArray[1][1]);
// push() adds an element to the end of the array
// pop() remove the last element of the array
// shift() remove the first element of the array
// unshift() adds a element to the start of the array
names.pop()
console.log(names[0]);

let nums = [1, 2, 3];

nums.shift();

console.log(nums[0]);

nums.unshift(30);

console.log(nums[0]);

randomFunction();


let enma = sum(1333, 2);
let enmaa = sum("bob " + "quin");

console.log(typeof enma);
console.log(typeof enmaa);

function randomFunction() {

    console.log("RANDOMFUCNTION CALLED");

}

function sum(a, b) {

    let c = a;
    let d = b;

    let e = c + d;

    console.log(e);

    return e;

}

function scopetest() {
    var cansee = "hi";
}

function scopeTest2() {
    let cantsee = "Hii";
}

// console.log(cansee);
// console.log(cantsee);

let jsonStrings = ["helalaso", 2323, " OBOBO"];

console.log(JSON.stringify(jsonStrings));

let strict3 = 3;

if (strict3 == 3) {
    console.log("this shoudl be true");
}
if (strict3 === 3) {
    console.log("This should be false");
}

// Logicals operators are same as C++, && || !== for strict inequality

let swti = 2;
switch (swti) {
    case 1: {
        console.log("Case 1");
        break;
    }
    case 2: {
        console.log("Case 2");
    }
    case 3: {
        console.log("Fall through");
        break;
    }
    default: {
        break;
    }
}

// Objects

let myobject = {
    name: "bob",
    'major': "CS",
    'age': 20,
    'favoriteFood': ['candy', 'pasta', 'chicken'],
    'test space': "lol",
    232: "booby"
};

console.log(myobject.name + " is " + myobject.age + " years old majoring in " + myobject.major + " test space is " + myobject['test space']);
for (let i = 0; i < myobject.favoriteFood.length; i++) {
    console.log(myobject.favoriteFood[i]);
}

// Adding a new propertie to an object

myobject.woof = "woofwoof";
myobject['deeznuts'] = 'deeznuts';

console.log(myobject['deeznuts']);
console.log(myobject.woof);

// Deleting a property from an object
delete myobject.woof;

// Checking if an object has a property
if (!myobject.hasOwnProperty("woof")) {
    console.log("Does not contain the woof");
}


// JSON.parse

let index = 10;

while (index > 0) {
    console.log(index);
    index--;
}

console.log(JSON.stringify(nums));

console.log("here is a random number " + Math.floor(Math.random() * 100));

let stringnum = "232";

let numparse = parseInt(stringnum);

console.log(typeof stringnum);
console.log(typeof numparse);

let binaryString = "1101";

// For parse int, the second arugment deifnes the base, so this case it would be base 2, for binary
let binaryNum = parseInt(binaryString, 2);

// Conditional statemenst

let numTest = -1;

let numCon = numTest > 0 ? "positive" : numTest < 0 ? "negative" : "undefined";

console.log(numCon);

// A variable whose value can not change, it is read only, Arrays can be a const but you can still change it's values as it is a reference variable refering to an arra in memory address
const CONSTVARIABLE = 10;

// "use strict"; makes it that we don't make mistakes while coding

const freezeObject = {
    "value": 10,
    "name": "thanh"
};

// freezing an object makes it so that the inner properties of the objects can't be change.
Object.freeze(freezeObject);

// Concatting arrays

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

// Annoymous funcitons
const concattingArras = (arr1, arr2) => arr1.concat(arr2);

let myAnonymousFunction = () => {
    console.log("HI");
    return 1;
};

console.log(JSON.stringify(concattingArras(arr1, arr2)));

var magic = function () {
    return new Date();
}

var magic2 = (ab, vd) => {
    return new Date();
}

var magic3 = () => new Date();

let testData = magic();
console.log(testData.toDateString());

// Using window.prompt() for use input

// let favoriteDog;
// favoriteDog = window.prompt("What is your favorite dog breed?");

// Type casting, 
let x = "bob";
let y = "bob";
let z = "bob";

x = Number(x);
y = String(y);
z = Boolean(z);

// What is the difference between a number data type vs an integer

let mynum = 1;
console.log(typeof mynum);

console.log(typeof x, x);

// different ways of making functions

let testfunct1 = function () {
    return 1;
}

function testfunct2() {
    return 2;
}

let testfunct3 = () => {
    return 3;
}

let testfunct4 = () => 4;

globalThis.g = 3;
console.log("hi", globalThis.g);

// test

// function Pear() {
//     this.age = 0;

//     setInterval((() => { this.age++; }) => {
//         console.log(${ this.age });
//     }, 1000);
// }

class thanhpro {
    constructor(name) {
        this.name = name;
        this.age = 10;
    }

    printName() {
        console.log(this.name);
        // setInterval(() => printAge(this.age), 1000);
    }
};

function printAge(age) {
    console.log("age is", age);
}

let me = new thanhpro("thah");
me.printName();

let collapse = (...agrs) => {
    for (let i = 0; i < agrs.length; i++) {
        console.log("This is ", agrs[i]);
    }
};

collapse(1, 2, 3, 4, 5);

// Default parameters

let defaultParametersFunction = (a = 1, b = 2) => {
    return a + b;
};

console.log(defaultParametersFunction("a"));

// Copying arrays using the spread operator

let spreadArr1 = [1, 2, 3, 4, 5];
let spreadArr2 = [...spreadArr1];
spreadArr1[0] = 11;

console.log(spreadArr2);

let someObject = {
    name: "thanh",
    bob: "pro",
    age: 14
};

// Destructuring

const { name: a, bob: b, age: c } = someObject;

console.log(a, b, c);