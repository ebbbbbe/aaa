// let arr = [1, 2, 4, 5, 4, 7];
// 数组倒序
// // let a = arr.reverse()//[ 7,  4,  5,  4, 2, 1]

// 数组升序
// let a = arr.sort((a, b)=>b - a)//[ 7, 5, 4, 4, 2, 1 ]
// console.log(a);

// 随机排序
/* function compate(){
    return Math.random()- 0.5;
}
console.log(arr.sort(compate)) //[ 7, 4, 1, 2, 4, 5 ] */

// 数组拼接
// let arr = [1, 2];
// console.log(arr.concat([3]));
// console.log(arr.concat([3,4]));
// console.log([...arr,3,[4]]);

// 数组删除
// let arr = [1, 2, 3, 4, 5];
// [ ) :左闭右开 ：start ，end （无法交换位置）
/* console.log(arr.slice(2));//[ 3, 4, 5 ]
console.log(arr.slice(2,4));[3, 4]
console.log(arr.slice(4,2));[]
console.log(arr.slice(-2));[4,5]
console.log(arr.slice(-2,-1));[4] */
// 将字符串 变成数组
/* let str = '123456';
console.log(Array.prototype.slice.call(str));//[ '1', '2', '3', '4', '5', '6' ]

function test(){
    console.log(Array.prototype.slice.call(arguments));//[ 1, 2, 3, 4, 5 ]
}
test(1, 2, 3, 4, 5) */

// splice
// let arr = [1, 2, 3, 4, 5];

// 能操作原数组：
// 1.起始 添加或者删除的位置
// 2.指定删除元素的个数 返回删除后的数组
// 3.插入的值
// console.log(arr.splice());//[]
// console.log(arr.splice(4));
// console.log(arr.splice(-1));
// console.log(arr.splice(0,4));

// console.log(arr,arr.splice(1,2,'a','b'))

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.indexOf(2));


// toString;


// Array.keys()
// inclueds()

const arr = [23, 43, 324, 453, 232,]
console.log(arr.call(null));
