//Note: collection of key & value pairs
//Note: object is define in {} braces
//Note: key are always string in javascript

// const names = [];
// const names = new Array();

// const person = new Object();
// const person = {
//     name: "Sharique",
//     age: 25,
//     isMarried: false,
//     phone: [1234512345, 1234567890]
// };

// const person = {
//     name: "Vikas",
//     age: 22,
//     address: {
//         city: "Madhubani",
//         state: "Bihar",
//     },
// };

//console.log(person[0]);  //undefined
//Note: To access information from an object
//Note: we have the dot notation & the array notation
//This a dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.address.city);
// console.log(person.address.state);


//This is a array notation
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["address"]["city"]);

// const person = {
//     name: "Vikas",
//     age: 22,
//     address: {
//         city: "Madhubani",
//         state: "Bihar",
//     },
// };

// const property = "age";
// console.log(person[property]);  //22

//Note: its print whole object.
//Note: we cannot print object in viewport by document.write().
//console.log(person);


//Note: only for-in loop works on object.
const person = {
    name: "Vikas",
    age: 22
};

//it give only keys
// for(let i in person){
//     document.write(i + "<br>")
// }

// for(let i in person){
//     document.write(i + " : " + person[i] + "<br>");
// }

// print object in reverse order 


//note: for-in loop for nested object
// const person = {
//     name: "Vikas",
//     age: 22,
//     address: {
//         city: "Madhubani",
//         state: "Bihar",
//     },
// };

// for(let i in person){
//     if(typeof(person[i]) === "object"){
//         for(let j in person[i]){
//             document.write(j + " : " + person[i][j] + "<br>");
//         }
//     }else{
//         document.write(i + " : " + person[i] + "<br>");
//     }
// }


//Object.keys,Object.values,Object.entries
//Object.seal, Object.freeze
//Object.assign
//Object.hasOwn

// const obj = {
//     name: "Anushka",
//     age: 20,
//     address: {
//         city: "Rajgarh",
//         state: "MP",
//     },
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));