1. Find the number of digits
const Find_Digits = (n) => {
    if (n == 0){
      return 1;
    }
    let count = 0;
    while(n != 0){
      n = parseInt(n/10) ;
      count++ ;
    }
    return count;
};

2. Find the Fives.
const Find_Five = (n) => {
    let count = 0;
    while(n != 0){
      let currDigit = n % 10;
      if(currDigit == 5){
        count++;
      }
      n=parseInt(n/10)
    }
    return count
};
3. Find Sum
const findSum = (n) => {
    let sum=0;
  for (i=1 ; i<=n ; i++){
  if(i%2==0)
  
  sum = sum + i;
  }
  return(sum)
};

4. Find the sum of the digits of a given number.
const Number_Sum = (n) => 
{
	let ans=0
	while(n!=0){
	  let digit=n%10;
	  ans += digit;
	  n=n/10;
	  n=parseInt(n);
	}
	return(ans);
};
5. Print the Odds.
const Print_Odd = (N) => 
{
	 for(let i=2;i<=N;i++)
	 {
	   if(i==2 || i%2!==0)
	   {
	     console.log(i);
	   }
	 }
};
6. Print the Pattern.
const Print_pattern = (N) => 
{
let ak="";
for(let i=1;i<=N;i++)
{
  ak += "*";
  console.log(ak);
}
};
7. Check whether a Number is a prime or not.
const Prime_Check = (N) => 
{
let i;
	 for(i=2;i<=(N-1);i++){
	   if(N%i==0){
	     break;
	   }
	 }
	   if(i==N){
	     return "YES"
	   }else{
	     return "NO"
	   }
}



8. Print Numbers
const printNumbers = (n) => {
    for(let i=1;i<=n;i++)
    console.log(i)
};

9. Print the Table
const Print_Table = (N) => 
{
  for(let i=1;i<=10;i++)
  {
    console.log(N +" * "+i+" = " +(i*N))
  }
}




