/* Function.prototype.myCall = function(o,...rest){
// 判断用户传递的上下文对象是不是null和undefined，则要改为window
    if(o === null || o === undefined){
        o = window;
    }
    // 判断用户传递的上下文对象是基本包装时候，则要改为其包装对象
    if(typeof o !== 'function' && typeof o !== 'object'){
        o = object(o)
    }

    // 接受myCall传递的第二个以后的参数
    // Array.from()把伪数组传数组
    const s1 = Symbol('s1');
    o[s1] = this;
    const re = o[s1](...rest)
    console.log(...rest);
    delete o[s1]
    return re;
} */

Function.prototype.myCall = function(o){
    if(o === null || o ===undefined){
        o = window;
    }
    if(typeof o !== 'function' && typeof o !== 'object'){
        o = object(o)
    }
    var arg = Array.from(arguments).slice(1)
    var noReapeat = Date.now().toString(36)
    o[noReapeat] = this;
    var result = eval('o[noReapeat]('+ arg.toString()+')')
    delete o[noReapeat];
    return result;
    
}

function f(a,b){
    console.log(this);
    return a + b
}

console.log(f.myCall({name:'laowang'},1,2));