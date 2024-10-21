function saymyname(){
console.log("A");
console.log("M");
console.log("A");
console.log("N");
}
//saymyname()

// function addtwonumber(number1,number2)
// {
//   console.log(number1+number2);
// }
function addtwonumber(number1,number2)
{
  console.log(number1+number2);
}
addtwonumber(3,4)
addtwonumber(3,"5")
addtwonumber(3,"q")
addtwonumber(3,null)

function loginusermessage(username)
{
    if(!username)
    {
        console.log("plz enter a user name")
    }
    return `${username} just logged in`
}
// console.log(loginusermessage("Aman"))
console.log(loginusermessage("sam"))