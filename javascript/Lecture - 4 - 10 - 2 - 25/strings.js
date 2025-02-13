// const str = "Javascript is awesome";

// console.log(str.length); //21   //it is a property beacause no paranthesis

// console.log(str.indexOf("a"));  //1
// console.log(str.indexOf("a", 2)); //3
// console.log(str.indexOf("a",20));  //-1
// console.log(str.indexOf("z"));  //-1
// console.log(str.indexOf("is"));  //11

// console.log(str.lastIndexOf("a"));  //14

// console.log(str.includes("is"));  //true
// console.log(str.includes("is", 10));  //true
// console.log(str.includes("is", 12));  //false
// console.log(str.includes("hellow"));  //false

// its not changed the original string 
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
//console.log(str.trimStart());
// console.log(str.trimEnd());



// const str = "Javascript is awesome";
// console.log(str.slice(1, 7));   //avascr    //last character omited
// console.log(str.slice(9, 16));  //t is aw
// console.log(str.slice(1)); //avascript is awesome   //not omite last character in single argument
// console.log(str.slice());  //Javascript is awesome

// negative index starts with last character of string index of that character is -1 
// console.log(str.slice(-10, -3)); //is awes
// console.log(str.slice(-10, -15));  //no answer
// console.log(str.slice(0, -1));  //Javascript is awesom

// slice can accepte negative parameter but substring can not 
// console.log(str.substring(1, 7));  //avascr
// console.log(str.substring(9));    //t is awesome

// console.log(str.substr(4, 12));  //script is aw
// console.log(str.substr(12, 4));  //s aw

// its not changed original string 
// const str = "Javascript is hard";
// console.log(str.replace("hard", "easy"));//Javascript is easy   //created a copy and change that string are immutable

// console.log(str.replace(/a/g, "A")); //replace all occurance using replace regax

// console.log(str.replaceAll("a","A"));  //replace all occurance and replace only first occurance


// console.log(str.split(" "));    //[ 'Javascript', 'is', 'hard' ]
// console.log(str.split("is"));   //[ 'Javascript ', ' hard' ]
// console.log(str.split(""));     [
//     'J', 'a', 'v', 'a', 's',
//     'c', 'r', 'i', 'p', 't',
//     ' ', 'i', 's', ' ', 'h',
//     'a', 'r', 'd'
//   ]

// let string = "I am a good";
// console.log(string.split("am"));
// console.log(string.split("am").length);  //2
// console.log(string.split("").length);  //11
// console.log(string.split("a"));  //[ 'I ', 'm ', ' good' ]
// console.log(string.split("a").length); //3


