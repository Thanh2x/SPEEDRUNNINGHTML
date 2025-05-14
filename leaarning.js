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
    'name': "bob",
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

console.log(myobject.woof);

// Deleting a property from an object
delete myobject.woof;

// Checking if an object has a property
if (!myobject.hasOwnProperty("woof")) {
    console.log("Does not contain the woof");
}