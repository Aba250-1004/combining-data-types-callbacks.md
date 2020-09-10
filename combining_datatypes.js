var crayonBox = {
    crayons: ["blue","yellow","purple"],
}

console.log(crayonBox.crayons[1]);

//Create an object bottle that has a property that is an 
// object: cap. cap can have properties like material: 
// 'metal' or 'plastic', color: blue or white etc. 
// Log one of the properties of that inner object.

let bottle = {
    cap:{
        material: "plastic",
    }
}

console.log(bottle.cap.material);

// Create an array called receipt that has at least one 
// object in it. The inner objects should be items that 
// have a name and a price. Log one of the properties 
// of that inner object.

let receipt = [
    {
        name: "food",
        price: 5,
    },
    {
        name: "drink",
        price: 10,
    },
    {
        name:"blanket",
        price:20,
    }
]

console.log(receipt[1].price);

// Create an array called apartmentBuilding that has
//  an array as one of its elements, the inner array 
//  should be the names of the tenants. Log one of
//   the elements of the inner array.

let apartmentBuilding = [
    ["amal","taylor","mateen"]
] 
console.log(apartmentBuilding[0][1]);

// Create a function knit that returns an object that 
// has the following kinds of properties item: 
// scarf, size : 6ft etc. Log a value of that 
// object (hint: call the function and then call a
// property on the return value).
const knit = () => {
    let toRet = {
        isScarf:true,
        size: "6ft",
    }
    return toRet;
}

console.log(knit().isScarf)
 
// Create a function crayonSelector that returns an
//  object that has an array (you can reuse your crayonBox 
// object). Log one of the elements of that array.
const crayonSelector = () => {
    var crayonBox = {
        crayons: ["blue","yellow","purple"],
    }
    return crayonBox;
}

console.log(crayonSelector().crayons[1])

// Create a function powerButton that returns a 
// function called options - options should 
// console.log a simple message like select a 
// song. Call that inner function
const powerButton = (callback) => {
    return callback()
}

const options = () =>{
    console.log("select a song")
}

powerButton(options);

// Model a Vending Machine Model a vending machine

// a vending machine is an object
vendingMachine = {
    
}

// it has an array of snacks (make 3 snacks)
vendingMachine.snacks = ["snack1","snack2","snack3"]

// snacks are objects that have a name and a price
vendingMachine.snacks = [
    {
        name:"snack1",
        price:2,
    },
    {
        name:"snack2",
        price:3,
    },
    {
        name:"snack3",
        price:4,
    }
]

// a vending machine has a function vend that allows 
// user to enter the array position (a number) of 
// the snack and then that snack will be returned
vendingMachine.vend = (input) => {
    if (input >= 0 && input < vendingMachine.snacks.length){
        return vendingMachine.snacks[input]
    }
}

// Be able to call vendingMachine.vend() with a 
// alid integer to return a snack
console.log(vendingMachine.vend(2));


// Make a function add that takes two 
// arguments (numbers) and sums them together
const add = (num1,num2) => {
    return num1 + num2;
}

// Make a function subtract that takes
// two arguments (numbers) and subtracts them
const subtract = (num1,num2) => {
    return num1 - num2;
}

// Make a function multiply that takes two 
// arguments and multiplies them
const multiply = (num1,num2) => {
    return num1 * num2;
}

// Make a function divide that takes two 
// arguments and divides them
const divide = (num1,num2) => {
    return num1 / num2;
}

// Make a function calculate that takes three 
// arguments. Assume the two arguments are a number 
// ie num1, num2 and a function called operates (a callback).
const calculate = (num1,num2, operates) => {
    return operates(num1,num2);
}

// Call calculate 4 times, each time using one of 
// the operation functions you wrote
console.log(calculate(2,2,add))
console.log(calculate(2,2,subtract))
console.log(calculate(2,2,multiply))
console.log(calculate(2,2,divide))

// fixed code 

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

// error 1 missing intializer meaning missing = in declration 
// error 2 cannot  call foo before intialized so you must call the 
// the function after it was created
// correct code below

const foo1 = ()=>{
    console.log('hi');
}
foo1();

