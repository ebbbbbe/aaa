// filter+indexOf
//  filter：返回一个过滤后的新数组；如果返回true就留下，false就过滤掉
let arr = [12,1,12,3,1,88,66,9,66];
    function unique(ary) {
        return ary.filter(function (item,index,a) {
            return ary.indexOf(item)===index;
        })
    }
    console.log(unique(arr));

