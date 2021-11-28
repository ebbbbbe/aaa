let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let obj = {};
        for(let i=0;i<ary.length;i++){
            let cur = ary[i];
            if(obj[cur]){
                //ary.splice(i,1);// 导致数组塌陷
                ary[i]=ary[ary.length-1];
                ary.length--;// 删除最后一项
                i--;
                continue;
            }
            obj[cur]=cur;// 给obj新增键值对；属性名和属性值是一样的
        }
        return obj
    }
    console.log(unique(arr));;
