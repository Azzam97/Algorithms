//function to push to the front
function pushFront(arr,num){
    for (var x = arr.length-1; x > -1; x--) {
        arr[x+1] = arr[x]
    }
    arr[0] = num
    return arr
}
console.log(pushFront([5,7,2,3],8))

//function to pop from the front
function popFront(arr){
    var value = arr[0];
    var temp = [];
    var j = 0;
    for (var x=0; x<arr.length-1; x++){
        temp[x] = arr[x+1]
        j++
    } 
    arr = temp
    console.log(value)
    return arr
}
console.log(popFront([4,5,7,9]))

//a function that inserts at a certain index
function insertAt(arr,index,num){
    for (var x = arr.length-1; x>index-1; x--){
    arr[x+1] = arr[x]
    }
    arr[index] = num
    return arr
}
console.log(insertAt([100,200,5],2,311))

//a function to remove an element in a set index
function removeAt(arr,index){
    var value = arr[index]
    var temp = [];
    var j = 0;
    for (var x = 0; x < arr.length; x++){
        if (x == index){
            continue;
        }
        else{
        temp[j] = arr[x]
        j++
        }
    }
    arr = temp
    console.log(value)
    return arr
}
console.log(removeAt([1000,3,204,77],1))

//a function to swap pairs and skipp the last element if it's odd
function swap(arr){
    if (arr.length/2==0){
        for (var x = 0; x < arr.length; x+=2){
            var value = arr[x]
            arr[x] = arr[x+1]
            arr[x+1] = value
        }
    }
    else{
        for (var x = 0; x < arr.length-1; x+=2){
            var value = arr[x]
            arr[x] = arr[x+1]
            arr[x+1] = value
        }
    }
    return arr
}
console.log(swap([1,2,3,4]))

//a finction to remove dupes
function removeDupes(arr){
    var temp = []
    var j = 0
    for (var x = 0; x<arr.length-1; x++){
        if (arr[x] !=arr[x+1]){
            temp[j] = arr[x]
            j++
        }
    }
    temp[j++] = arr[arr.length-1]
    arr = temp
    return arr
}
console.log(removeDupes([-2,-2,3.14,5,5,10]))