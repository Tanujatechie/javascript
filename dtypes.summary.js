/* web events and objects master these u bcome js master 
primitive 
        ::
   7 types :     String, Number ,Boolean ,Null[empty] , Undefined , BigInt , Symbol

 reference type/ non-primitive 
                             ::
                             Arrays , Objects , Functions 


Js is a dynamically typed language.
const score = 100 
const scoreValue = 0.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined or let userEmail


const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 34567890235478482929n

*/

const heros = ["Tanuja" , "Vijay" , "Sathi" , "Vamsi"];

let myObj = {
    name : "Tanuja" , 
    age : 21, 

}

// variable type function 

const myFunction = function(){
    console.log("Hello world");
}

console.log(heros);
console.log(myObj);
console.log(myFunction);