// function repeatNtimes(str, num) {
//     //code here
//     if (num <= 0){
//         return ""
//     }else if (num === 1){
//         return str
//     }else {
//         return str + repeatNtimes (str, num-1)
//     }

//   }
// function repeatNtimes(str, n) {
//     let result = "";
// for (let i=0; i<n; i++) {
//     result += str + "";
//                 }
// return result;
// }
// let print = printStr("mega", 2);
// console.log(print);

// function repeatNtimes(str, num) {
//     var repeat = ""
//     while(num > 0) {
//         repeat += str
//         num--
//     }
//     return repeat
// }

function repeatNtimes(str,num) {
    return console.log(str.repeat(num));
  }
  repeatNtimes("abc",3)
// console.log(repeatNtimes("ab", 1));
// console.log(repeatNtimes("abc", 3));
// console.log(repeatNtimes("abc", 0));
