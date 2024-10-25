const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");   //(This is old fashioned)

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //interpolated strings.  ${}

const gameName = new String('hitesh-hc-com')        // new ----->to create an instance of a class, also known as an object

console.log(gameName[0]);       //gives the letter at an index.
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-10, 7)
// console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))    //to replace (from, to)

console.log(url.includes('sundar'))     //to check where particular string is present in the initial string

console.log(gameName.split('-'));       //forms an array of the rest of the rest of the string which was being separated by('-)