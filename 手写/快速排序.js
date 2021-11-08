function quickSort(arr){
    // 排序之前先判断数组的长度，如果长度小于等于1 的时候，则直接把当前数组返回即可
    if(arr.length <= 1){
        return arr
    }
    // 选出一个值
    let center = arr.shift()
    // 定义左右两个数组
    let leftArr = [];
    let rigntArr = [];

    // 把小于center的放在数组左边 把大于center的放在数组右边
    arr.forEach(item=>{
        if(item < center){
            leftArr.push(item)
        }else {
            rigntArr.push(item)
        }
    })
    // 合并左右三个数组
    let result = [...quickSort(leftrArr),center,...quickSort(rigntArr)]
    return result
}



console.time("time");
let arr = [5, 3, 2, 6, 2, 4, 7, 23, 2];
console.log(quickSort(arr));
console.timeEnd("time");