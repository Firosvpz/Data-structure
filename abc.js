function binary(arr,target,left=0,right=arr.length-1){
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid
    }else if(arr[mid]<target){
        return binary(arr,target,mid+1,right)
    }else{
        return binary(arr,target,left,mid+1)
    }
}

let arr=[1,2,3,4,5]
let target=4
let index=binary(arr,target)
if(index!==-1){
    console.log('value found');
}else{
    console.log('value not found');
}