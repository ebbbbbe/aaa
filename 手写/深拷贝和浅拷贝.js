/* // 浅拷贝
let o1 ={
    name:'laowang',
    age:18,
    score:[100,90,80],
    do:function(){}
}
// 把ol拷贝一份
let o2 = {};
// 拷贝的时候只拷贝一层，被称为浅拷贝

// 分别看o1 中有哪些属性，给o2扩展一份
for(let key in o1){
    o2[key] = o1[key]
}

console.log(o2,o1,o2 === o1);
// 浅拷贝后，内部属性如果是一个对象类型，则是同一个对象
console.log(o2.score === o1.score);

 */
// 深拷贝
function checkType(o){
    return Object.prototype.toString.call(0).toLowerCase().slice(8,-1);
}



function deepClone(o){
    // 判断当前拷贝的对象或者数组
    if(checkType(o) === 'object'){
        let result = {};
    }else if (checkType(o) === 'array'){
        var result = [];
    }else {
        // 如果不是对象和数组，则不进行拷贝，直接把当前值返回即可
        return o;
    }
    // 如果当前的值是对象或者数组，则开始拷贝
    for (let key in o){
        result[key] = deepClone(o[key])
    }
    return result;
}


var o1 = {
    name:'laoli',
    age:18,
    score:[100,90,80]
}
let o2 = deepClone(o1)
console.log(o2);
console.log(o2.score === o1.scroe);
console.log(o1 === o2);
