function missingNumber(array)
{
    let n=array.length+1;
    let total=(n* (n+1)) /2;
    let sum= 0;
    for(let i=0;i<array.length;i++)
    {
        sum+=array[i];
}
return total-sum;
}
array=[1,2,4,5]
console.log(missingNumber(array));
