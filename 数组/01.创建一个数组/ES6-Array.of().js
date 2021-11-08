/*
    定义：返回由所有参数值组成的数组，如果没有参数，就返回一个空数组。
    目的：Array.of() 出现的目的是为了解决上述构造器因参数个数不同，导致的行为有差异的问题。 
*/

let a = Array.of(3,11,88);
console.log(a);//[3, 11, 88]
let a2 = Array.of(3);
console.log(a2);//[3]
let a3 = Array.of();
console.log(a3);//[]