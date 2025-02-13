//For any function to be a highter order function(HOF), it must fulfill, alteast 2 of the follwing condition:
//it should work on an array
//it should take a function as its first argument 
//it should return an array

//forEach
//map, reduce, filter, some, every, find, findIndex

//const numbers = [1,2,3];
// let output = [];
// for(let i = 0 ; i < numbers.length ; i++){
//     output.push(numbers[i] * numbers[i]);
//     output[i] = numbers[i] * numbers[i];
// }


//foreach
// const numbers = [1,2,3];
// let output = [];
// numbers.forEach(calculateSquare);
// function calculateSquare(num, index, arr){
//     console.log(num, index, arr);
//     output.push(num * num);
// }
// console.log(output);

// map 
//mar return a array
//const numbers = [1,2,3];
// const output = numbers.map(calculateSquare);
// function calculateSquare(num, index, arr){
//     return(num * num);
// }
// console.log(output);  //[1,4,9]
// console.log(numbers); //[1,2,3]

// filter 
// const numbers = [12,13,51,50,55,48];
// const result = numbers.filter(findgeaterthanfifty);
// console.log(result);
// function findgeaterthanfifty(num){
//     return num >= 50;
// }


// reduce 
// reduce does not return array its return only single value
//reduce take two arguments
// const numbers = [1,2,4,6,8,9];
// const sum = numbers.reduce(reducer, 0);   //seciond value means 0 is optional
// function reducer(previous, current){
//     return previous + current;
// }
// console.log(sum);  //30