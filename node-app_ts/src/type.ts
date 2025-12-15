// type Employee = { 
//      name  : string , 
//      startdata : Date
// }

// type Manager = { 
//      name  : string , 
//     department  : string 
// }

// type techlead  = Employee & Manager;

// const t : techlead =  {
//      name :  "sidhartha" , 
//      startdata : new Date() ,
//      department : "Asada"  
// }


// the diff b/w types and interfaces is  interfaces u can extends into a class and types lets u do unions and intersections;
// only a type can define a array not an interface 

// type  numberarr = number[];

// function maxval(arr: numberarr):number {
//   let maxi = 0; 
//   for (let i = 0; i < arr.length; i++) {
//       if(arr[i] > maxi ) {  maxi = arr[i]; } 
//   }
//   return maxi;
// }

// console.log(maxval([1, 3, 4, 43434, 34]));




interface User {
     firstname : string , 
     lastname  : string , 
     age : number
}

function filterusing(user : User[]): number {
      var cnt = 0;
       for(let i = 0; i<user.length; i++) {
              if(user[i].age >= 18) cnt++;
       }
       return cnt;
 }