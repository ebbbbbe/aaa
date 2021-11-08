Function.prototype.myBind = function(){
    // 这里this指向调用f 函数
    var _this = this
    var arg = Array.from(arguments)
    return function(){
        // arg[0]是需要指向他的duixiang
        // return _this.apply(arg[0],arg.alice(1))
        return _this.apply(arg[0],arg[1])
    }
}

function f(a,b){
    console.log(this);
    return a + b
}

// 自己调用当前传入null或undefined所以指向的window
var newF = f.myBind({
    name:'laowang'
},[1,2])
console.log(newF());