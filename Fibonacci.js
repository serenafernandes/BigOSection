function findFibonacciIterative(n){
  let arr = [0, 1];
  for(let i = 2; i < n + 1; i++){
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

function findFibonacciRecursive(n){
  if(n < 2) {
    return n;
  }
  return findFibonacciRecursive(n-1) + findFibonacciRecursive(n-2);
}

findFibonacciRecursive(2);