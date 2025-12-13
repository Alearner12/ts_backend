// type Employee = { 
//      name  : string , 
//      startdata : Date
// }
function maxval(arr) {
    var maxi = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
}
console.log(maxval([1, 3, 4, 43434, 34]));
