// enums allows u to define named constansts 
// allow u to create a human readable waay to represnt a set of constant values 
function firstelw(arr) {
    return arr[0];
}
var value = firstelw([12, "Sidhartha", "el", 11, 12]);
console.log(value); // return because the typo has both type number and string and uppercase can't be apply on the number
function first(arg) {
    return arg[0];
}
var output1 = first(["hi there", 1, 2]);
console.log(output1);
var ll2 = first([12, 324, 422]);
console.log(ll2);
