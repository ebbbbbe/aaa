// function deleteRepeat(arr){
//     return arr.filter((item,index)=>index === arr.indexOf(item))
// }

// function deleteRepeat(arr){
//     let newArr = [];
//     return arr.reduce((p,c)=>{
//         if(p.indexOf(c)=== -1){
//             p.push(c);
//             return p;
//         }
//         return p;
//     },[])
// }

function deleteRepeat(arr){
    let newArr = [];
    arr.forEach(item =>{
        if(newArr.indexOf(item) === -1){
            newArr.push(item);
        }
    })
    return newArr;
}



let myArr = [4, 3, 6, 4, 1, 6, 2, 9, 3, 7, 9, 6]
let re = deleteRepeat(myArr);
console.log(re,myArr)