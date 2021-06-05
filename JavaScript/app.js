/*const id = 1000;

if (id !=100){
     console.log("INCORRECT!");
}
else{
    console.log("CORRECT")
}


var books =querySelectorAll("#book-list)
console.log(books)")

books.forEach(function(book){
    BaseAudioContext.textContent+="hello";
})*/


//function declaration

function greet (){
    return "hello"
    
}
console.log(greet());

//funtion taking a parameter and passing in the arguments

function greet(firstName, lastName){
    return "hello "  + firstName + lastName;
}
console.log (greet("adeniye " , "kehinde"));

//another way to space the values of the parameter

function greet(firstName, lastName){
    return `hello "  ${firstName} + ${lastName}`;
}
console.log (greet("adeniye " , "kehinde"));

//  function expresssion

const square = function(x) {
    return x * x;
}
console.log(square(3));
// immediately invocable function expression
(function(name){
    console.log(`hello ${name}` );
}(`Kehinde`))


for (let i=0; i < 10; i++){
   console.log(i);
}

//Loop (For, While )
 
for (let i=0; i < 10; i++){
    if(i === 2){
        console.log("2 is my favourite number");
        continue;
    }
    if(i === 5){
        console.log('Stop the loop)');
        break
    }
    console.log('number' + i)
}

/* while 
let i = 0;
while (i < 10){
    console.log('number' + i);
    i++
}

let i = 0;
do{
    console.log('Number' + i);
    i++
}
while(i < 10);*/

//loop through Arrays
const cars = ["Honda", "Ferrari", "Tesla", "BM"]
for (let i = 0; i<cars.length; i++){
    console.log(cars[i]);
}
// for each loop

cars.forEach(function(car, index){
    console.log(`${index}: ${car}` );
})

//Block scope
var a = 1;
let b = 2;
const c = 3;

// function scope
function test (){
    var a= 4;
    let b = 5;
    const c= 6;
    console.log ('Funtion Scope:',  a, b, c);
}

test();
// block level scope
if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('if block: ', a, b, c);
}

console.log('Global Scope', a, b, c);


