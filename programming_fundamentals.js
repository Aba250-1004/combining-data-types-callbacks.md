// const f = l => {
//     this is making a function that takes in the param l
//     let es = 0, p = 0, c = 1, n = 0
//     setting a bunch of variables to numbers
//     while (c <= l) {
//     loop while c is less than or equal to l
//       n = c + p;
//     set n equal to c + p
//       [c, p] = [n, c]
//     set index c to equal n and p to equal c
//       es += (c % 2 === 0) ? c : 0
//      if c % 2 === 0 then es += c else es += 0
//     }
//     return es
//   }
//   console.log(f(55))

// const f2 = (limit) => {
    // this is making a function that takes in the param limit
//     let evenSum = 0;
    // set evenSum to 0
//     let previous = 0;
    // set previous to 0
//     let current = 1;
    // set current to 1
//     while (current <= limit) {
    // loop while current is less than or equal to limit
//       let next = current + previous;
    // set next equal to current + previous
//       previous = current;
    // set previous equal to current
//       current = next;
    // set current equal to next
//       if (current % 2 === 0) {
    // check if current is even
//         evenSum += current;
    // if even add to sum
//       }
//     }
//     return evenSum;
//   }
  
//   console.log(f2(55))

// In keeping with one of our programming principals 
// (write code for the maintainer): What would have been 
// a more semantic name for this function (hint: this is a 
//  problem we had for either lab or hw and is considered 
// a classic ) - are there any other variable names or 
// things that would make this code easier to read and understand?

// I think if they used a for(var i = 1; i <= limit; i++) this
// would be a lot easier to read because then you wouldn't need 
// the previous, current, and next because they make the loop
// a lot less clear in what it is accomplishing which is getting
// the sum of all the even numbers up to the limit parameter.

// If you started a new job and your project was to expand
// the functionality of this function by allowing a second
// argument and then based on that second argument,
// returning the sum of even or odd numbers, which code
// would you rather start working with f or f2?

// The clear winner in this is f2 in code f it is extremely difficult
// to tell what is happening in fact I don't think I could have
// explained it until I saw the code for f2.  All you would need to
// to f2 is a else statement since you are already check for even
// numbers and the only other case is odd numbers.

// Finally, the 'shorter' code style doesn't use semi-colons,
// except for the fourth line. Remove this semi-colon!
// Run the code, is this semi-colon necessary?

// the semi colon is necessary I'm not sure why but the error is a 
// Invalid left-hand side in assignment so I'm assuming you can add
// things before an assignment unless you have a semi colon