//Array
const myarr= [1,23,4,5,66,7]
const myheroes= ['IM','CA','SM','TH','SW']
const myArr=new Array(1,2,3,4,5,6,7,8,9)
//console.log(myArr[0]);
//console.log(myheroes[3]);
//console.log(myarr[4])


// ARRAY METHODS

myarr.push(67)
//console.log(myarr[6])
myheroes.push("gojo")
//console.log(myheroes[3]);
//myArr.push(10)
//console.log(9);


myArr.unshift(0)

//console.log(myArr);
myArr.shift();
//console.log(myArr);
myArr.unshift(89);
//console.log(myArr);
myArr.shift()
const newArr =myArr.join()
// console.log(newArr)
// console.log(typeof newArr);
// console.log(typeof myArr)
///slice or Splice
const myn1=myArr.slice(2,4);
console.log(myn1)
console.log(myArr)
const myn2= myArr.splice(2,3)
console.log("splice:",myn2)
console.log(myArr)
//slice can't manipulate or vhange the original array 
//splice can change or manipulate the original array
