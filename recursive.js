// fibunacci
function recursiveFibunacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibunacci(n - 1) + recursiveFibunacci(n - 2)
}

// console.log(recursiveFibunacci(1));
// console.log(recursiveFibunacci(9));

// O(n)- iterative
// O(2^n) - Recursive

function factorial(n){
    if(n<=1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
// console.log(factorial(6));

// palindrome
function palindrome(str){
    if(str<=1){
        return true
    }
    if(str[0]===str[str.length-1]){
        return palindrome(str.slice(1,-1))
    }

} 
console.log(palindrome('radar'));

// reverse a string
function reverse(str){
   if(str.length<1){
    return str
   }
   return reverse(str.slice(1))+str[0]
}
// console.log(reverse('abcd'));

function sum(arr){
    if(arr.length===0){
        return 0
    }
    return arr[0]+sum(arr.slice(1))
}
const array=[1,2,3,4,5]
// console.log(sum(array));