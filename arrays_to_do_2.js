// //function to reverese an array
function reverse(arr) {
    var temp = 0;
    var n = arr.length;
    for (var i = 0, j = n; i < n && j > n / 2; i++, j--) {
      if (arr[i] == arr[j - 1]) {
        break;
      } else {
        temp = arr[i];
        arr[i] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    return arr;
  }
console.log(reverse([1,2,3,4,5,6,7,8]))

//function to rotate the values in an array **for now it can work on the array length of shifts but no more**
function rotate(arr, val){
    var temp = [];
    var j = 0;
    for (var x = arr.length-1; x>=arr.length-val; x--){
        temp[j] = arr[x]
        j++
    }
    for (var k = 0; k < arr.length-val; k++){
        temp[j] = arr[k]
        j++
    }
    arr = temp
    return arr
}
console.log(rotate([1,2,3,4,5,6],6))


//finction that filters between min and max values
function filter(arr, min, max){
    var temp = [];
    var j = 0;
    for (var x = 0; x<arr.length-1; x++){
        if (arr[x] >= min && arr[x] <= max){
            temp[j] = arr[x]
            j++
        }
    }
    arr = temp
    return arr
}
console.log(filter([1,2,3,4,5,6,7,8,9],3,6))

//function that returns a concat of 2 arrays
function arrConcat(arr1, arr2){
    var newArr = [];
    var j = 0;
    for (var i = 0; i < arr1.length; i++){
        newArr[j] = arr1[i]
        j++
    }
    for (var k = 0; k < arr2.length; k++){
        newArr[j] = arr2[k]
        j++
    }
    return temp
}
console.log(arrConcat([1,2],[55,57]))