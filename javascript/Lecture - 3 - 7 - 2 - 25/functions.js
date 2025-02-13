//BASIC BUILDING BLOCKS OF MODERN DAY PROGRAMMING
// FUNCTION: WRITE ONCEM, USE MULTIPLE TIMES 

//fuction defination
// function sum(){
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
// }

// sum();   //function call(Invocation)

// FUNCTION WITH NO ARGUMENTS 
// FUNCTION WITH ARGUMENTS 

// function sum(a, b){
//     console.log(a + b);
// }
// sum(10, 20);  //30

// function sum(a, b){
//     console.log(a + b + c);
// }
// sum(10, 20, 30);  //30   //no error

// function sum(a, b, c){
//     console.log(a + b + c);
// }
// sum(10, 20, 30);  //30   //no error

// function sum(a, b, c){
//     console.log(a + b + c);
// }
// sum(10, 20);  //30   //no error

// function sum(a){
//     console.log(a + b);
// }
// sum(10, 20);  //b is not defined


//FUNCTION WITH ARGUMENTS HAVING DEFAULT VALUES
// function sum(a ,b){
//     console.log(a + b);
// }
// sum(100, 200); //300
// sum(50); //NaN 
// sum(); //NaN

// function sum(a = 10,b = 10){
//     console.log(a + b);
// }
// sum(100, 200); //300
// sum(50); //60
// sum(); // 20

// function fullName(fn = "Virat", ln = "Kohli"){
//     console.log(fn + " " + ln);
// }
// fullName("Rahul");  //Rahul Kohli
// fullName("Sachin","Tendulkar"); // sachin Tendulakar
// fullName("Rohit", false);  //Rohit false

//FUNCTION HAVING RETURN VALUES
// function sum(a = 1,b = 2){
//     return (a + b);
// }
// console.log(sum(10, 5));
// const ans = sum(10, 5)
// console.log(ans);

// function sum(a = 1, b = 2){
//     return a + b;
// }

// function evenOdd(num){
//     if(num % 2 == 0){
//         return "Virat";
//     }else{
//         return "Sachin"
//     }
// }
// console.log(evenOdd(sum(10,20)));  read inside out(andar se bahar padho)