let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
       let a = ary.sort(function (a,b) {
           return a-b;
       });
       for(let i=0;i<a.length;i++){
           if(a[i]===a[i+1]){
               a.splice(i+1,1);
               i--;
           }
       }
       return a;
   }
   console.log(unique(arr));
