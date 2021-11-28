// splice
let arr = [12,1,12,3,1,88,66,9,66];
 function unique(ary) {
        for(let i=0;i<ary.length;i++){
            for(j=i+1;j<ary.length;j++){
                if(ary[i]===ary[j]){
                    ary.splice(j,1);
                    j--;
                }
            }
        }
        return ary;
    }
    console.log(unique(arr));
