// 01
/* var user = 'global';
var o = {
    user :'追梦子',
    fn(){
        console.log(this.user);
    }
}
o.fn()//追梦子 */

// 02

/* var authorName = '山边小溪';
function doSomething(){
    var blogName = '梦想天空';
    function innerSay(){
        console.log(blogName);
    }
    innerSay()
}
console.log(authorName);//山边小溪
doSomething();//梦想天空
console.log(blogName);//报错
innerSay()//报错 */

// 03

/* function b(x, y, a){
    arguments[2] = 10;
    console.log(a);//10
}
b(1, 2, 3) */

//04
/* var a = 20;
setTimeout(function(){
    var a = 30;
},0)
console.log(a);//20 setTimeout异步*/

// 05
/* function fn(a, b){
    console.log(this + ',' + a);//Heilo,5
}
fn.call('Heilo', 5, 10)//call 改变this指向 */

// 06
/*  //给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数
// 输入：[1, 2, 3, 4, 5, 6, 7 ]
// 输出：[3,4,5,6,7,1,2]
let arr = [1, 2, 3, 4, 5, 6, 7 ];
const k = 5;
const move = function(arr,k){
    return arr.splice(-k %arr.length).concat(arr);//[3,4,5,6,7,1,2]
}
console.log(move(arr,k)); */

// 07 使用proxy的形式实现一个数据的绑定

// 08 如何把一个字符串的大小取反
//(大写变小写小写变大写)，例如 'AbC' 变成 'aBc'

/* const str = 'AbC';
const newStr = [].map.call(str,item=>{
    return /[a-z]/.test(item)?item.toUpperCase():item.toLowerCase();
}).join('')
console.log(newStr); */

// 09 用代码的形式实现一个sleep函数 实现异步延迟

// 利用回调函数的形式实现
/* let sleepCb = (time,cb) => setTimeout(cb,time);
sleepCb(2000,()=>{
    console.log('time end is running');
})

// 使用prominse对象的形式完成

let sleep = time => new Promise(resolve => setTimeout(resolve,time));
sleep(3000).then(res=>{
    console.log('time end is running agin');
}) */

// 10 将变量a进行赋值，求下面代码中 a 在什么样的情况下赋值会打印 1？

/* var a =[1, 2, 3] ;
a.toString = a.shift //a.shift() 数组第一个并返回删除的数组
if(a == 1 && a ==2 && a == 3){
    console.log(1);
} */
// getter -> 访问一个变量的时候进行拦截
/* var value = 1;
Object.defineProperty(window, "a", {
  get() {
    return this.value++;
  }
});
if (a === 1 && a === 2 && a === 3) {
  console.log("hello world!");
} */

// 11 说出以下代码的输出结果，并解释原因
/* const num ={
    a:8,
    add(){
        return this.a + 2
    },
    reduce:()=>this.a -2
}
console.log(num.add());//10 this谁调用指向谁
console.log(num.reduce());//NaN 箭头函数没有this指向 */

// 12 用JS实现随机选取10-100之间的十个数字存入一个数组，并排序
/* const arr = [];
// 获取随机数  Math.random（）向下取整   Math.floor（）获取随机数
const getRandom= (start,end)=>{
    return Math.floor(Math.random() * (end -start + 1) + start)
}
// 遍历
for( let i = 0; i< 10; i++){
    arr.push(getRandom(10,100))
}
// 排序
arr.sort((a,b)=>a-b)
console.log(arr); */

// 13 输出今天的日期 以 YYYY-MM-DD 的方式
/* const date = new Date();
const year = date.getFullYear(); // 2021
const month = date.getMonth() + 1; // 1月对应的是0 这个数字
const day = date.getDate();
// const fill0 =function(num){
//     return num = num < 10 ? "0" + num : num;
    
// }
const fill0 = num =>num < 10 ? '0' + num : num
// 字符串拼接  
console.log(`${year}-${fill0(month)}-${fill0(day)}`); */

// 14 说出下列代码的输出结果，并解释原因
/* var a ;
console.log(typeof a);// undefined
console.log(b);  //reference Error
b = 10;
console.log(typeof b);//number */

// 15 简述数组的 pop, push , shift, unshift的区别

/*  -都是数组对象原型上面的方法，任何数组实例化对象都可以进行调用
    -都可以对数组本身进行改变
    -pop push 都是对数组最后一项进行处理
        pop 删除数组最后一项，pop =>删除的哪一项
        push 在数组的最后一项新增一个内容，push => 新增之后的数组长度
    - shift UNshift 都对数组第一项的操作
        shift 将数组第一项进行删除操作 shift =>删除的那一项
        unshift 数组的第一项插入一个值 unshift => 新增之后的数组的长度

    p 对数组后面进行处理 */

// 16 实现Promise.retry,成功后resolve结果失败后重新尝试 超过一定次数才真正的reject
/* Promise.retry = async (fn, times) => {
  while (times > 0) {
    try {
      const res = await fn();
      console.log(res);
    } catch (error) {
      console.log("try agin...");
      times--;
    }
  }
}
const test = ()=>{
    return new Promise((resolve,reject)=>{
        const num = Math.floor(Math.random()* 10);
        if(num > 7){
            resolve(num)
        }else{
            reject(new Error(num))
        }
    })
}
Promise.retry(test,5) */

// 17 用代码方式实现数组非零非负最小值index获取
/* const arr = [10, 21, 0, -7, 35, 7, 9, 23, 18];
const getIndex = arr =>{
    let index = -1;
    const minVal = arr.reduce((cur,pre)=>{
        return(cur <= 0 || pre <=0) ? Math.max(cur,pre) : cur > pre ? pre : cur;
    },-1)
    index = arr.findIndex(item => item === minVal);
    return index
}
console.log(getIndex(arr)); */

//18 使用三种不同的方法实现下面的代码输出 0- 9
/* for(var i = 0;i < 10;i++){
    setTimeout(() => {
        console.log(i);
    },1000)
} */
/* // 第三个参数
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}
// 使用let 的形式创建块级作用域
for (let i = 0; i < 10; i++) {
    setTimeout((i) => {
        console.log(i)
    }, 0,i)
}
// 创建一个函数作用域保留当前循环的变量
for (var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, 0)
    })(i)
}
 */
// 19 说出以下代码的输出结果，并解释原因  
// || 是一个短路运算符 出现true 直接返回true
/* const one = (false || {} || null);//任何一个对象转化为布尔值都是真值
const two = (null || false || "");//null undefinde NaN 返回的布尔值都是fals
const three = ([] || 0 || true);// 
console.log(one, two, three);
 */
var sb = "false";
console.log(!!sb);//结果显示true!

