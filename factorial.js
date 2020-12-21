function faktorial(n){
return n<=0?(n==0?1:undefined):n*faktorial(n-1)
}
console.log(faktorial(6));