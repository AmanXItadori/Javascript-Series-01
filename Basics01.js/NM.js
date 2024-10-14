const score= 400//here js auto./implicit/own defines that score is number..
//we can also define the datatype explicit
const balance =new Number(100);
console.log(balance);
console.log(balance.toString().length)
//console.log(typeof balance)
console.log(balance.toFixed(3))
const oth=123.87
console.log(oth.toPrecision(2))

const hun=1000000
console.log(hun.toLocaleString('en-IN'))


//*****************MATHS******************
// console.log(Math)
// console.log(Math.abs(-3))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(4.5))
// console.group(Math.min(4,5,6,7,8,9,2,1))
console.log((Math.random()*10)+1);
//math.random() values always lie in btw 0 and 1 ..it predicts any random value
const min =10
const max= 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)