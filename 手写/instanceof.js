/* 
    instanceof:
        A instanceof B:判断B的原型对象是否在A的原型链上，如果在则返回true,否则返回false


*/

function myInstanceof(A,B){
    var _A = A.__proto__
    var _B = B.prototype
    // 判断第一次获取得A的隐式原型是否在B的原型对象上
    while(_A !== _B){
        // 不一致，继续沿着原型链找
        var _A = _A.__proto__
        // 如果_A还没有找到，则到了原型链的终端null，直接返回false
        if(!_A){
            return false
        }
    }
    return true
}
console.log(myInstanceof({},Array));
console.log(myInstanceof([1,2],Array));
