//singleton
//object.create
 //object literals
 const msym= Symbol("key1")

 const Jsuser= {
   
    name:"Aman",
    "Full name" :"Aman Yadav",
    age:18,
    [msym]: "mykey11",
    loc:  "Ranchi",
    email: "aman@google.com",
    isloggedin: false,
    lastlogin: ["Monday", "saturday"]
 }
 //How to access object
 //using dot
 console.log(Jsuser["Full name"])
 //using []
 console.log(Jsuser["name"])
 console.log(Jsuser["msym"])
 console.log(typeof Jsuser.msym)

 Jsuser.email= "aman@chatgpt.com"
 //we can also freeze/lock our values in object
 //Object.freeze(Jsuser)
 //Now the value of Jsuser Cannot change it doesn't show an error
 Jsuser.email= "aman@xoxo.com"
 console.log(Jsuser.email);
 Jsuser.greetings=function(){
   console.log("Hello js user")
 }
 console.log(Jsuser.greetings())
 Jsuser.greetingstwo=function(){
  console.log(`Hello js user,${this.name}`);
}
console.log(Jsuser.greetings())
console.log(Jsuser.greetingstwo())
 

 