// 封装一个父类
function Father(name ,age){
    this.name = name
    this.age = age
}

Father.prototype.eat = function(){
    console.log('Father中的方法');
}

// 封装一个子类
function Chilren(name,age,type){
    // 构造函数继承
    this.type = type
    Father.call(this,name,age)
}

// 2.原型链继承
Chilren.prototype = new Father;

// 3.修正constructor
Chilren.prototype.constructor = Chilren;
Chilren.prototype.say = function(){
    console.log('吹牛逼');
}

let t1 = new TeaCher('laoli',18,'男','HTML5','0722')
console.log(t1);
console.log(t1.eat,t1.say);

