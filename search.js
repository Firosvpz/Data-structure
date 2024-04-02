function countOccurence(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++
        }
    }
    return count
}

// console.log(countOccurence([2,4,5,6,4,7,8,4],4));

const originalArray = [1, 2, 3, 4, 5]
const reversedArray = reverseArray(originalArray)

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {

        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

// console.log(reversedArray);

function isPalindrome(str) {
    let arr = str.split('')
    let newArr = arr.filter((ar, index) => ar !== ' ')
    for (let i = 0; i < arr.length / 2; i++) {
        let char1 = newArr[i].toLowerCase()
        let char2 = newArr[newArr.length - 1 - i].toLowerCase()

        if (char1 !== char2) {
            return false
        }
    }
    return true
}

// console.log(isPalindrome('A man a plan a canal panama'));
// console.log(isPalindrome('MalayaLam'));
// console.log(isPalindrome('Helloo'));


function firstOccurence(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    let result = -1

    while (rightIndex >= leftIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] === target) {
            result = middleIndex
            rightIndex = middleIndex - 1
        } else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return result
}

console.log(firstOccurence([1,3,2,2,4,6,8,7],2));


function lastOccurence(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    let result = -1

    while (rightIndex >= leftIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (arr[middleIndex] === target) {
            result = middleIndex
            leftIndex = middleIndex + 1
        } else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return result
}

// console.log(lastOccurence([1, 3, 4, 2, 4, 6, 8, 7], 4));
