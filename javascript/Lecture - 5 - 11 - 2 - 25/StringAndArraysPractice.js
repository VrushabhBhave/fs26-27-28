// let str = "JavaScript";
// let output = str.split('').reverse().join('').slice(0, -3).toUpperCase();
// console.log(output);   ////TPIRCSA

// let x = 0;
// function fun(){
//     if(x === 0){
//         let x = 1;
//         console.log(x);  //1
//     }
//     console.log(x);  //0
// }
// fun();

// let str = "The quick brown fox jumps over the lazy dog";
// let result = str.replace(/o/g, "0").split(" ").slice(4, 7).join("-");
// console.log(result);  //jumps-0ver-the

// let text = "JavaScript is awesome. JavaScript is fun.";
// let result = text.replaceAll("JavaScript", "JS").indexOf("awesome") - text.lastIndexOf("is");
// console.log(result);   //-28


// let phrase = "Hello, World!";
// let result = phrase.slice(-6, -1).split("").reverse().join("+");
// console.log(result);  //d+l+r+o+W

// const names = ["Gaurav", "Channu"];
// console.log(names.push("Vikas"));  //3
// console.log(names.pop());   //Channu
/* console.log(names.unshift("Vikas"));
console.log(names.shift()); */  //3 Vikas

/*const numbers = [3, 6, 8];
numbers.push(10, 12, 14);
numbers.unshift(10, 12, 14);
const a = numbers.pop();
const b = numbers.shift();
const c = numbers.push(100);
console.log(a + b + c);  */ //32


/*const numbers = [1, 2, 3, 4, 5];
const a = numbers.pop();
const b = numbers.unshift(6,7,8);
const c = numbers.push(1,2,3);
console.log(a+b+c+1);*/  //23

// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.pop();
// let result = arr.shift() + arr.splice(2, 2)[0];    //splice return the deleted element array9
// console.log(result);
// console.log(arr);    
// ans:- 3
//       [ 1, 2, 5 ]

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("date");
// fruits.unshift("apricot");
// fruits.splice(2, 1, "blueberry", "elderberry");
// console.log(fruits.length);  //6
// console.log(fruits[2]);   //blueberry

// let queue = ["Tom", "Jack", "Sarah"];
// queue.push("Emma");
// queue.shift();
// queue.unshift("Mike");
// queue.splice(1, 1, "Anna", "Chris");
// console.log(queue.length);  //5
// console.log(queue[2]);     //chris
