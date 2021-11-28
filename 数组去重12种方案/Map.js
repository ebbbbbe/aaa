// Map :利用了Map数据结构存值的特点
let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let newAry =[];
        let map = new Map();
        for(let i=0;i<ary.length;i++){
            if(!map.has(ary[i])){
                map.set(ary[i],true);
                newAry.push(ary[i]);
            }
        }
        return newAry
    }
   console.log( unique(arr));;
