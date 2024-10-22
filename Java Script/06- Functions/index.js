function addNumbers(a, b){
    z= a+b;
    return z
}

let ans = addNumbers(100, 10)
console.log(ans)


// taking multiple aurguements

function arg(){
    let result = 0
    for(let i =0; i<arguments.length; i = i+1){
        result = result + arguments[i]}
        return result;
    }



let x = arg(100, 200, 10, 20, 73);
console.log('final ans is ' + x)