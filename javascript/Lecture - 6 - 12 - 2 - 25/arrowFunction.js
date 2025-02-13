// function fun(){
//     console.log("I am a named function");
// }

// function (){
//     console.log("I am a named function");
// }
// if we not give a name of the function it is anonymous function 
// anonymous function we mostly use in callbacks or eventlistener 
//anonymous function hava to be called instantly

// fun();


// It is a anonymous function 
// const numbers = [1,2,3];

// const output = numbers.map(function(num) {
//     return num * num;
// })
// console.log(output); //[1,4,9]


// this are a arrow function 
// here not write function name so we give arrow =>
// const numbers = [1, 2, 4, 6, 8, 9];
// const sum = numbers.reduce((previous,current) => {
//     return previous + current;
// });
// console.log(sum);

// const numbers = [1,2,4,6,8,9];
// const sum = numbers.reduce((current,previous) => {
//     return current + previous;
// },2)
// console.log(sum);

//two difference of anonymous or arrow function
//arrow function are not hoisted
//the value of "this" is not defined inside arrow function

// const num = [23, 54, 11, 10, 8, 9, 96, 67];

// let output = num.filter(num => {
//     return num % 2 == 1;
// })
// console.log(output);   [23,11,9,67]