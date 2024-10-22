//Immediately Invoked Function Expression (IIFE)

(function chai()
{
    console.log(`DB connected`)
})()

//In JavaScript, an IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it's defined. 
//This pattern is used to create a scope to avoid polluting the global namespace with variables or functions. 
//It can also help in controlling the visibility of variables.

(function ()
{
    console.log(`hi aman`);
})();
