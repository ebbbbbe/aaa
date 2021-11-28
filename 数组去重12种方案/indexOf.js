let arr = [12, 1, 12, 3, 1, 88, 9 ,66];
function unique(ary){
    let newAry = [];
    for(let i = 0; i< ary.length;i++){
        let cur = ary[i];
        if(newAry.indexOf(cur) === -1){
            newAry.push(cur)
        }
    }
    return newAry
}
console.log(unique(arr));