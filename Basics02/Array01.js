const marvelheroes= ["thor","Ironman","Spiderman"]
const dcheroes= ["superman","flash","wonderwoman"]

//marvelheroes.push(dcheroes);
//console.log(marvelheroes)
///if we do this type of things then dcheroes get add like an element in a marvelheroes
//e.g.=['thor','Ironman','Spiderman', [  'superman', 'flash', 'wonderwoman' ]]

const new1= marvelheroes.concat(dcheroes)
// you get desired result
//console.log(new1)
///spreading
//this also gives desired result
//each Element of an array act as an indivissdual array
//const allhero=[...marvelheroes,...dcheroes]
const arr2= [1,2,3,[4,5,6],7,[8,9,[10,11],12]];
//flaten the sub arrays into array recursively
const arr3= arr2.flat(Infinity)
console.log(arr3)
//to check given tthing is array or not!!
console.log(Array.isArray("Hitesh"))
//to convert into an Array
//An iterable object to convert to an array.
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))//it gives an empty array


let score1=100
let  score2=200
let score3 =300
console.log(Array.of(score1,score2,score3));

