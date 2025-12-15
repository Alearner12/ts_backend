interface User {
     firstname  : string; 
     lastname : string;
     age : number; 
     email? : string
}; 

function isLegal(user : User) {
       if(user.age > 18) {
           return true;
       }
       else  return false;
}
function greet(user : User) {
     console.log("hi there " + user. firstname);
}

isLegal({
     firstname :  "sidhatha" ,
     lastname : "kumar" , 
     age  : 20,
     email :  ""
})  