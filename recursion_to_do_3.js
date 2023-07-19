function binarysearch(arr, key, start, end){
    if (start > end){
        return false;
    }
    var middle = Math.floor((start + end)/2)
    if (arr[middle] == key){
        return true;
    }
    else if (arr[middle]<key){
        return binarysearch(arr,key, middle+1, end);
    }
    else if (arr[middle]>key){
        return binarysearch(arr, key, start, middle-1);
    }
}
var arr = [4,5,6,8,12,20,30,39,46,56,68,79,83,90,102,120,135,700,1000,2330]
var x = arr.length
console.log(binarysearch(arr,2330,0,x-1))

function GCF(a,b){
    if (a==b){
        return a;
    }
    else if(a>b){
        return GCF(a-b,b)
    }
    else{
        return GCF(a,b-a)
    }
}

console.log(GCF(3,100))