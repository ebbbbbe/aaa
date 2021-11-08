var len1 = ({} +{}).length;
var len2 = ([] + []).length;
var len3 = (function(){}).length;
console.log(len1, len2 , len3);

// function test(a, b, c){
//     console.log(arguments.length);
// }
// test(1,2,3,4)
// console.log(test.length);/