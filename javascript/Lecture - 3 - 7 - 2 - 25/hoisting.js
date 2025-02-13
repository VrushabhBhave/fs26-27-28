// HOISTING: THE PROCEDURE BY WHICH JS TAKES VARIABLE DECLARATION (VAR) & FUNCTION DEFINATIONS UP TOP TO THE STARTING OF THE BLOCK IS KNOWN AS HOISTING
//================================================
//                     var a;
                    
// console.log(a);     console.log(a);    //undefined          console.log(a);
// var a = 10;         a = 10;                                 let a = 10 //cannot access 'a' refrence error

                                                            //    console.log(a);
                                                            //    const a = 10 //cannot access 'a' refrence error
//==========================================================
// a = 10;
// console.log(a);   //when you do not provide keyword to variable it is by default created as a var

//======================================================================================================================

// function sum(a, b){
//     console.log(a + b);
// }
// sum(1, 2);


// let a = 1;
// function x(){
//     let a = 2;
//     console.log(a); //2
// }
// x()
// console.log(a); //1

// var a = 1;
// function x(){
//     var a = 2;
//     console.log(a);  //2
// }
// x();
// console.log(a);  //1

// console.log(a);  //undefined
// var a = 1;
// function x(){
//     console.log(a); //undefined
//     var a = 2;
// }
// x();
// console.log(a); //1

// var a = 10;
// function x(){
//     a = 20;
//     console.log(a); //20
// }
// x();
// console.log(a);  //20


// console.log(x); //undefined
// var x = 5;
// function innerScope(){
//     var x = 10;
//     console.log(x);  //10
// }
// innerScope();
// console.log(x); //5

// function foo(){
//     console.log(a); //function a() {}
//     var a = 1;
//     function a() {}
//     console.log(a); //1
// }
// foo(); //function a() {}

// function foo(){
//     console.log(a); //function a() {}
//     function a() {}
//     var a = 1;
//     console.log(a); //1
// }
// foo();