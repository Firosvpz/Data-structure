function linear(n) {
    let arr = [10, 3, 4, 56, 6]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i
        }
    } 
    return -1
}
console.log(linear(56));

let index=linear(10)

if(index!==-1){
    console.log('found');
}