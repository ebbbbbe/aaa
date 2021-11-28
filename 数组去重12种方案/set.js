// set ： 不是一个数据类型，是一种数据结构；成员唯一
let arr = [ 12, 1, 12, 3, 4, 45, 55, 345, 3,]

function unique(ary){
    let s = new Set(ary)
    // Array.from：将set 树结构转成真正的数组
    return Array.from(s)
}
console.log(unique(arr));