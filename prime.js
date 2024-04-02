function prime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(prime(1)); //false
console.log(prime(17)); //true
console.log(prime(5));  //true

// Big O - O(n)     