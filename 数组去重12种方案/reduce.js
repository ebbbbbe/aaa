// reduce
let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        // reduce : 第一个是函数，第二个参数会传给第一次回调的prev;
        return ary.reduce((prev,next)=>{
            // 该函数返回值是下一次执行的prev;
            return prev.includes(next)?prev:[...prev,next];
        },[])
    }
    console.log(unique(arr));
