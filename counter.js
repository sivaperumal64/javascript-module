function createCounter(n) {
 
  let count = n;

  
  function counter() {
    
    return count++;
  }

  
  return counter;
}


const myCounter = createCounter(5);

console.log(myCounter()); 
console.log(myCounter()); 
console.log(myCounter()); 
