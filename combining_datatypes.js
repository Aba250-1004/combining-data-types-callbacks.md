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