/* Function.prototype.myApply = function (o,...rest){
    if( o === null || o === undefined){
        o = window;
    }
    if(typeof o !== 'function' && typeof o !== 'object' ){
        o = object(o)
    }
    const s1 = Symbol('s1');
    o[s1] = this;
    const re = o[s1](...rest.flat());
    console.log(...rest);
    delete o[s1];
    return re;
} */

Function.prototype.myApply = function(o){
    if(o === null || o ===undefined){
        o = window;
    }
    if( typeof o !== 'function' && typeof o !== 'object'){
        o = object(o)
    }
    var arg = arguments[1];
    var noReapeat = Date.now().toString(36)
    o[noReapeat] = this;
    var result = eval('o[noReapeat]('+arg.toString() + ')')
    delete o[noReapeat];
    return result
}

function f(a,b){
    console.log(this);
//    console.log(b);
   return a + b
}
console.log(f.myApply({name:'laowang'},[1,2]));