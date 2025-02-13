// const person = {
//     name: "Vrushabh",
//     age: 24,
//     MobileNumber: "9284564826",
//     address: {
//         city: "Jalgaon",
//         state: "Maharashtra"
//     }
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.MobileNumber);
// console.log(person.address.city);
// console.log(person.address.state);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["MobileNumber"]);
// console.log(person["address"]["city"]);
// console.log(person["address"]["state"]);

// const property = "age";
// console.log(person[property]);

// console.log(person);

//Note: Print Object on viewport using for in loop only for in loop is used in object
// const person = {
//     name: "Vikas",
//     age: 24,
//     isMarried: false,
//     gender: "Male"
// }

// for(let i in person){
//     document.write(i + " : " + person[i] + "<br>");
// }

// const person = {
//     name: "Vikas",
//     age: 24,
//     isMarried: false,
//     gender: "Male",
//     address: {
//         city: "Jalgaon",
//         state: "Maharashtra"
//     }
// }

// for(let i in person){
//     if(typeof(person[i]) === "object"){
//         for(let j in person[i]){
//             document.write(j + " : " + person[i][j] + "<br>");
//         }
//     }else{
//         document.write(i + " : " + person[i] + "<br>");
//     }
// }

//Note:Object.keys,Object.values,Object.entries
const person = {
    name: "Vrushabh",
    age: 22,
    gender: "Male",
    address: {
        city: "Jalgaon",
        state: "Maharashtra"
    }
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
