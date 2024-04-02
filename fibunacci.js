function fibunacci(n){
 const fib=[0,1]    
 for(let i=2;i<=n;i++){
    fib[i]=fib[i-1]+fib[i-2]
 }
 return fib
}
console.log(fibunacci(2));  //[ 0, 1, 1 ]
console.log(fibunacci(3));  //[ 0, 1, 1, 2 ]
console.log(fibunacci(7));  //[ 0, 1, 1,  2,3, 5, 8, 13]


// Big O - O(n)

   
  