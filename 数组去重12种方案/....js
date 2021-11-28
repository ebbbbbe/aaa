// 类似于方法一的set，用了剩余运算符...
let  arr = [12,1,12,3,1,88,66,9,66];
    let a = [...new Set(arr)];
    console.log(a);

