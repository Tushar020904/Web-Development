//Template Literals
let specialString = `My name is Tushar Bhatt`
console.log(typeof specialString);
console.log( specialString);

// why backticks???

let obj = {
    items: "pen",
    price: 10,
};


let output = `the cost of ${obj.items} is ${obj.price} rupees.`;
console.log(output);
console.log("the price of the", obj.items, "is", obj.price, "rupees");

//string methods

let str = "Tushar Bhatt";
let x = str.toLocaleUpperCase();
console.log(x);

let str1 = "    Tushar Bhatt    ";
let y =  str1.trim();
console.log(y)

let z = str.charAt(3);
console.log(z);