// 使用三种不同的方法实现下面的代码输出 0- 9
/* for(var i = 0;i < 10;i++){
    setTimeout(() => {
        console.log(i);
    },0)
} */


for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}

for (var i = 0; i < 10; i++) {
    setTimeout((i) => {
        console.log(i)
    }, 0, i)
}

for (var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, 0)
    })(i)
}