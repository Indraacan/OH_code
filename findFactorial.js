function findFactorial (number){
    let answer = 1;

    for (let i=2; i<=number;i++){
        answer = answer * i
    }
    return answer
}
console.log(findFactorial(5))

function findFactorialRec (num){
    if (num === 2){
        return 2;
    }
    return num * findFactorialRec(num - 1)
}
console.log(findFactorialRec(6));