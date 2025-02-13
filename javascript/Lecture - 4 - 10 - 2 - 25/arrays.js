// In c, c++, in java array are homogenous   values are same types
//In javascript array are heterogenuous      values are different types

//let names = new Array(); //ARRAY CONSTRUCTOR
// let names = [];
// let names = ["Channu", "Vikas", true, 100];  //ARRAY LITERAL

// let names = [];
// names[0] = "Channu";
// names[1] = "Vikas";
// names[2] = "Anushka";

// let numbers = [];
// numbers[0] = 1;
// numbers[2] = 5;
// numbers[7] = 10;
// console.log(numbers);  //[ 1, <1 empty item>, 5, <4 empty items>, 10 ]

//push : insert values at the end   //push returns the new length of the array
//unshift : insert values at the beginning  //unshift return the new length of the array
//pop : remove 1 value from the end   //pop return the pop element
//shift : remove 1 value from the beginning  //shift return the shift element

// const numbers = [1, 2];
// numbers.push(3, 4);   //[ 1, 2, 3, 4 ]
// numbers.unshift(-1, 0);  //[ -1, 0, 1, 2, 3, 4 ]
// numbers.pop();   //[ -1, 0, 1, 2, 3 ]
// numbers.shift();  //[ 0, 1, 2, 3 ]
// numbers.push("Rajan","Sharique");  //[ 0, 1, 2, 3, 'Rajan', 'Sharique' ]
// numbers.push(["Anushka", "Pooja", "100"]);   //[ 0, 1, 2, 3, 'Rajan', 'Sharique', [ 'Anushka', 'Pooja', '100' ] ]
// // console.log(numbers[6].length);   //3
// //console.log(numbers[6][1].length)  //5
// //console.log(numbers[6][2].length)  //undefined
// //console.log(numbers.length);
// console.log(numbers);



// splice modification in original array 
//const numbers = [1, 5, 11, 42];
// console.log(numbers.slice(0, 3));  //[ 1, 5, 11 ]
// console.log(numbers.slice(3));  //[ 42 ]

// splice return the deleted elements array
//splice change the original array
// console.log(numbers.splice());
// numbers.splice(2, 0, 43);  //[ 1, 5, 43, 11, 42 ]
// numbers.splice(2, 1, 43)  //[ 1, 5, 43, 42 ]
// numbers.splice(0, 0, 10);  //[ 10, 1, 5, 11, 42 ]
// numbers.splice(1, 2); //[ 1, 42 ]
// numbers.splice(1, 2, 44, 45);  //[ 1, 44, 45, 42 ]

// numbers.splice(1, 2, 11, 5);  //[ 1, 11, 5, 42 ]   //just swap 5 11 to 11 5 for fun  //in one step
// numbers.splice(1, 1);
// numbers.splice(2, 0, 5);  //in two step
//console.log(numbers);


//this muted the original array
// const names = ["Hema", "Rekha", "Jaya", "Sushma"]; //strings sort only acending
// const numbers = [23, 22, 17, 99, 11, 10, 2];  //[10, 11, 17, 2,22, 23, 99] its sort according to string
// console.log(numbers.sort());  

// const numbers = [23, 22, 17, 99, 11, 10, 2];
// const compareFn = function(a,b){
//     return a - b;
// };   //[2, 10, 11, 17,22, 23, 99]
//console.log(numbers.sort(compareFn));


//console.log(numbers.sort((a,b) => {return a - b}));
