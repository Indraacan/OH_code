const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function checkNumber(input){
     return !isNaN(input)
}
rl.question("Enter number:", num => {
console.log(checkNumber(num))
rl.close();
})