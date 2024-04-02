function binaryRecusrion(arr,target,left=0,right=arr.length){
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid
    }else if(arr[mid]<target){
        return binaryRecusrion(arr,target,mid+1,right)
    }else{
        return binaryRecusrion(arr,target,left,mid-1)
    }
}

let arr=[40,50,60,80]
let target=40
let index=binaryRecusrion(arr,target)
if(index!==-1){
    console.log('value found');
}else{
    console.log('not found');
}