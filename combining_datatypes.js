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