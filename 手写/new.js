/* 
分析new做了什么？
    -new会让函数返回一个对象
    -把函数的this指向new创建的对象
    -把new创建的对象的原型链修改为指向当前函数的原型对象
    -如果函数return的是一个对象类型值，则这个函数被实例化返回的就是这个对象，而不是new创建的对象
*/



function Student (name){
    this.name = name
}

function myNew(constr){
    // 1.创建一个对象
    let obj = {}
    // 拿到给被调用函数传递的实参
    let arg = Array.from(arguments).slice(1)
    // 2.调用构造函数，把构造函数的this指向当前的对象，并向构造函数传参
    let result = constr.apply(obj,arg)//result 就是构造函数constr的返回值
    // 3.修改o 的原型链，让o的隐式原型指向构造函数的显式原型，这样o就可以访问构造函数原型对象上的方法
    obj.__proto__ = constr.prototype
    // 判断构造函数的返回值是不是对象类型
    if(typeof result === 'object' && result !== null || typeof result === 'function'){
    //    当result 是对象类型的时候，返回这个result而不能返回o
        return result
    }
    return obj
}

let s1 = myNew(Student,'laowang')
console.log(s1);



