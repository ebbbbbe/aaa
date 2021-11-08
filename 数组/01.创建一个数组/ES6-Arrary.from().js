/* 

    定义：用于将两类对象转为真正的数组（不改变原对象，返回新的数组）。
    参数：
    第一个参数(必需):要转化为真正数组的对象。
    第二个参数(可选): 类似数组的map方法，对每个元素进行处理，将处理后的值放入返回的数组。
    第三个参数(可选): 用来绑定this。
    
 */

// 1. 对象拥有length属性
let obj = {0: 'a', 1: 'b', 2:'c', length: 3};
let arr = Array.from(obj); // ['a','b','c'];
// 2. 部署了 Iterator接口的数据结构 比如:字符串、Set、NodeList对象
let arr = Array.from('hello'); // ['h','e','l','l','o']
let arr = Array.from(new Set(['a','b'])); // ['a','b']
