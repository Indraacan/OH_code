function diffArray(arr1, arr2) {
    //code here
    var newArr = [];
    //return newArr = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item) )
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));