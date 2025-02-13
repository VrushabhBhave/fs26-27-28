// reduce 
// reduce does not return array its return only single value
//reduce take two arguments
// const numbers = [1,2,4,6,8,9];
// const sum = numbers.reduce(reducer, 0);   //seciond value means 0 is optional
// function reducer(previous, current){
//     return previous + current;
// }
// console.log(sum);  //30

// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc,curr) => acc + curr,0) - arr.filter(x => x % 2 === 0).length;
// console.log(result);   //13

// const arr = [1, 2, 3, 4, 5];
// const result = arr.map(x => x * 2).filter(x => x > 5).reduce((acc,curr) => acc + curr, 0);
// console.log(result);  //24

// const arr = [1, 2, 3, 4, 5];
// const result = arr.slice(1, 4).map(x => x * 2).reduce((acc,curr) => acc + curr,0);
// console.log(result);  //18

// let str = "abcdefghijklmnopqrstuvwxyz";
// let result = str.slice(str.indexOf('m'),str.indexOf('t')).split('').filter((h, i) => i % 2 === 0).join('');
// console.log(result);  //moqs

// let text = "The rain in Spain stays mainly in the plain";
// let result = text.split(" ").filter(word => word.includes("ain")).map(word => word.replace("ain","AIN")).join(" ");
// console.log(result);  //rAIN SpAIN mAINly plAIN

