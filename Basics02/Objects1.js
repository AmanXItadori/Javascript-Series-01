//this is singleton object....
//const tinderuser= new Object()
//this is not singleton object
const tinderuser={}
tinderuser.id="123abx"
tinderuser.name="sammy"
tinderuser.isloggedin=false
//console.group(tinderuser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lstname: "choudhary"
        }
    }
}
//console.log(regularuser.fullname.userfullname)
const obj1= { 1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//const obj3= Object.assign({},obj1,obj2)
//console.log(obj3)
const obj3={...obj1, ...obj2}
console.log(obj3)

const users =[
    {id:1,
    email: "h@gmail.com"},
    {id:1,
    email: "h@gmail.com"},
    {id:1,
        email: "h@gmail.com"},
        {id:1,
            email: "h@gmail.com"},
            {id:1,
               email: "h@gmail.com"},


    ]

    console.log(users[1].email,users[1].id)
    console.log(tinderuser);
    console.log(Object.keys(tinderuser));
    console.log(Object.values(tinderuser));
    
    