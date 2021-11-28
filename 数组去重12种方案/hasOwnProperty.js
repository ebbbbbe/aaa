// hasOwnProperty : 检测属性名是否是对象的一个私有属性;返回一个布尔值；
let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let obj = {};
        return ary.filter(function (item,index,a) {
            // item : 数组每一个成员
            // index: 成员对应的索引
            // a : 整个数组
            // hasOwnProperty来校验的该属性是否出现过；
           return  obj.hasOwnProperty(typeof item+item)?false:obj[typeof item+item]=true;
           if(obj.hasOwnProperty(typeof item+item)){
               return false
           }else{
               obj[typeof item+item]=true;
               return true;
           }
        })
    }
    console.log(unique(arr))
