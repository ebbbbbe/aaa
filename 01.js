let arr = [1, 2, 3, 4]
for (k in arr){
    console.log(k);
}
//charCodeAt(position)
var message="jquery4u"
//alert "113"
console.log(message.charCodeAt(1))

//indexOf(char/substring)
var sentence="Hi, my name is Sam!"
if (sentence.indexOf("Hi",2)!=-1){
    console.log("Sam is in there!")

}
//slice(start, end)
var text="excellent"

let a =text.slice(0,4) //returns "exce"
console.log(a,text);
let b =text.slice(2,4) //returns "ce"
console.log(b,text);

//includes()
var mystring = "Hello, welcome to edureka";
var n = mystring.includes("122");
console.log(n,mystring);
//output: True

//trim()
var str = "     Hello Edureka!     ";
console.log(str.trim());



var array = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:9,age:6},{id:2,age:8},{id:10,age:9}];
array.sort(function(a,b){
    if(a.id === b.id){// 如果id的值相等，按照age的值降序
        return b.age - a.age
    }else{ // 如果id的值不相等，按照id的值升序
        return a.id - b.id
    }
})
// [{"id":2,"age":8},{"id":5,"age":4},{"id":6,"age":10},{"id":9,"age":6},{"id":10,"age":9},{"id":10,"age":2}] 

