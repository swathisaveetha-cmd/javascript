function countOddEven(arr) {
  let odd = 0;
  let even = 0;

  for (let num of arr) {
    if (num % 2=== 0) 
    {
  even++;
    } 
    else
    {
      odd++;
    }
  }

  return { odd, even };
}

console.log(countOddEven([1, 2, 3, 4, 5, 6]));
