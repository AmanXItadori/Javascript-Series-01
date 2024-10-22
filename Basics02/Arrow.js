const user ={
    username:"hitesh",
    price: 999,
    welcomemessage : function() {
       console.log(`${this.username} ,welcome to website`);
    //    console.log(this)
    }
   
}

// user.welcomemessage()
// user.username="Aman"
// user.welcomemessage()

//console.log(this);
function chai()
{
    console.log(this)
}
chai() 

//Arrow function 
//Explicitily return
// const addtwo =  (num1 ,num2) => {
//     return num1+ num2
// }
const addtwo = (num1,num2)=> (num1+num2)
console.log(addtwo(5,6))
