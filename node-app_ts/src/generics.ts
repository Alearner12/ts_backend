// enums allows u to define named constansts 
// allow u to create a human readable waay to represnt a set of constant values 

// suppose for a game where user has keypress inout  and the game perform some actions 
// based on the keypress whether it will up down  left right ,so what would be type of the 

// keypress so eventually to treat this type of problemm we need to introduce enums in ts also 



// type  keyinput = "up" | "down" | "left"  | "right"; // this might help 

// // now comes to enumeration 
// enum direction {
//      Up ,  // 0  can evetually some other value rather than just constant but have to assign each one some value
//      Down,  // 1 
//      Right, // 2 
//      left   // 3 so eventually enums will be converted to the some constant value that will reach to js just a virtual 
//      // concept in javascript just easier to read 
// }


// function dosomething(keypress : direction){  // here used is used
//          // do something
//          if(keypress ==  direction.Up) return "up"
// }

// dosomething(direction.Up);
// dosomething(direction.Down); 
// console.log(direction.Up);
// console.log(direction.Down);
// console.log(direction.left); 
// console.log(direction.Right);  /// 


// //dosomething("1"); // logic will fail here 

// const app = expres();

// enum ResponseStatus {
//       success = 200 , 
//       NotFound = 411, 
//       Error = 500
// }


// app.get("/" , (req , res) =>  {
//         if(!req.query.UserId) {
//              res.status(ResponseStatus.NotFound).json({});
//         }
//         // and so and so on 
//         res.json({});
// })




// ------------------------------ generics ---------------------------------------------------------------------




// generics arre language indepeden concepts 



// 1 lets say u have to return the first element of the array that can be either string or numbeer

type typo = number | string;

function firstelw(arr : typo[]) {
     return arr[0];
}


const value  = firstelw([12 , "Sidhartha" , "el" , 11 , 12 ])
console.log(value); // return because the typo has both type number and string and uppercase can't be apply on the number


function first<T>(arg: T[]): T | undefined  {
    return arg[0];
}

let output1 = first(["hi there" , 1 , 2]);
console.log(output1);
let ll2 = first([12 , 324 ,422]);
console.log(ll2);


// exporting and importing modules

export function add(a : number , b : number) : number  {
      return a + b;
}

export const pi = 3.14; 


import {add , PI} from "./math";

add(2 , 3);


// import types and value 

export type  User  =  {
     id : number, 
}

import type {User}  from "./types";


// 4️⃣ Mixed exports (allowed)
// // auth.ts
// export default function login() {}

// export const logout = () => {};

// import login, { logout } from "./auth";

// ✅ Best practices (IMPORTANT)

// ✔ Prefer named exports
// ✔ Use default export sparingly
// ✔ Always use import type for types
// ✔ Keep paths clean with barrel files - barell files that reexport modules 

