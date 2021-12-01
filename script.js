// what will be output of i and n?

let i = 10;
let n = i++ % 5;
 console.log(i,n)
// output i == 11 , output n == 0

// swap two variables 
let a = 10;
let b = 3;
[a,b] = [b,a]
 console.log(a,b)
// a = 3 b = 10

// swap two variables without using the third one
let x = 10;
let y = 3;
let swap ;
swap = x;
x = y;
y = swap;
console.log(x,y)