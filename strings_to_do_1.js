//a function that removes the spaces
function removeSpaces(string){
    var temp = "";
    for (var i = 0; i<string.length; i++){
            if (string[i] == " "){
                continue;
            }
            else{
                temp = temp + string[i]
            }
    }
    string = temp
    return string
}
console.log(removeSpaces(" Pl ayTha tF u nkyM usi c "))

//function that only retuens the digits
function getDigits(string){
    var temp = "";
    for (var i = 0; i<string.length; i++){
        if (isNaN(string[i])){
            continue;
        }
        else{
            temp = temp + string[i]
        }
    }
    string = temp
    return string
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

//function that returns an acronym
function acronym(string){
    var temp = "";
    var mySplit = string.split(" ")
    for (i = 0; i<mySplit.length; i++){
        temp = temp + mySplit[i][0]
    }
    return temp.toLocaleUpperCase()
}
console.log(acronym("there's no free lunch - gotta pay yer way."))

//function that returns the number of non-space characters
function noSpace(string){
    var j = 0;
    for (var i = 0; i<string.length; i++){
        if (string[i] == " "){
            continue;
        }
        j++
    }
    return j
}
console.log(noSpace("Honey pie, you are driving me crazy"))

//function that removes the string shoeter than a given value
function removeShort(arr, val){
    var temp = [];
    var j = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i].length < val){
            continue;
        }
        else{
            temp[j] = arr[i];
            j++;
        }
    }
    arr = temp
    return arr
}
console.log(removeShort(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))