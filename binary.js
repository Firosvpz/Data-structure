function binary(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] === target) {
            return arr[mid]
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return 0
}

let arr = [1, 2, 3, 4, 5, 6]
let target = 4

const index = binary(arr, target)
if (index !== 0) {
    console.log(`value found ${target}`);
} else {
    console.log('not found');
}
