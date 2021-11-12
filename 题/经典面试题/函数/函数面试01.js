//  Function 
// const test = new Function('a', 'b', 'c','conse')
// const sest = new Function('a', 'b','c','consle',)
var a = 1,
    b = 2;

function test(){
    var b = 3;
    return new Function('c','console.log(a + b + c)');

}
var t = test();
console.log(t);
t(4)