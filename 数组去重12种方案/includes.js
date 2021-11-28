// includes :包含；如果数组包含那一项，返回true；不包含返回false
//  includes：方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let newAry = [];
        let len = ary.length;
        for(let i=0;i<len;i++){
            let cur = ary[i];
            if(!newAry.includes(cur)){
                newAry.push(cur);
            }
        }
        return newAry;
    }
    console.log(unique(arr));
