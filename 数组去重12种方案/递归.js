// 递归
let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let  len= ary.length;
        ary = ary.sort(function (a,b) {
            return a-b;
        });
        function loop(index) {
            if(index>=1){
                if(ary[index]===ary[index-1]){
                    ary.splice(index,1);
                }
                loop(index-1)
            }
        }
        loop(len-1);
        return ary;
    }
    console.log(unique(arr));
