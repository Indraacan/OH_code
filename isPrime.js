function prima(num) {
    let pembagi = 0;
    for (let i =1; i<=num; i++){
        if (num%i == 0){
            pembagi ++
        }
    }
    if (pembagi == 2){
        return 'bilangan prima'
    }else {
        return 'bukan bilangan prima'
    }
      
}
console.log(prima(4));
console.log(prima(5));
console.log(prima(6));
console.log(prima(7));
console.log(prima(8));
