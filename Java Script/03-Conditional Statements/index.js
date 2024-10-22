//simple conditional statements

const age = 22;

if (age>=18){
    console.log("yes you can vote");
}else{ 
    console.log("no u r not an adult")
}

//ternary operators

let x = age<=18? "yes vote now" : "no u cant vote";
console.log(x)

//Switch

const opt = 3

    switch(opt){
    case 1 : console.log("this is one.")
    break;
    case 2 : console.log("this is two.")
    break; 
    case 3 : console.log("this is three.")
    break; 
    case 4 : console.log("this is four.")
    break; 
}