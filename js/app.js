//alert("I made it");

//const name = 'olu'
//alert(name);
//convert string to number
let val,name;
val = Number(true);

console.log(val);
//Math objects
name= "Olugbenga"
let num ;
num = 40.2
//round a number up to the next incremental number
console.log(Math.ceil(parseFloat(num)))
console.log(Math.floor(parseFloat(num)))
console.log(Math.ceil(Math.random() * 20 + 1))
console.log(name.charAt(name.length-7))

const names ="Olu";
const work ="Peace Naturals";
const age =76;
const person = {
    firstName : 'Olu Akindele'
}
let id = 300;

if (id === 100 ){
    x = 100
}else {
    x= 4
}
let varb;
varb = person.firstName;
let html;

html = `<ul>
            <li>${names}</li>
            <li>${work}</li>
            <li>${age > 40 ? 'Old' : 'Young'}</li>
            <li>${ person.firstName}</li>
            <li>${x}</li>
        </ul>    
    `

//document.body.innerHTML = html

let age_k = 36

switch(age_k){
    case  40:
        console.log("too old")
    case 36:
        console.log("too young")
}

//functions
function gretting(firstname, lastname){
    return `Hello ${firstname}, ${lastname}`;

}
console.log(gretting('olu','Femi'));



val = document.all
valArr = Array.from(val)


//this converts hTML collection to an array.
valArr.forEach(v => {
    console.log(v);
    
});
console.log(val);

const li = document.createElement("li");
li.className ="new_li";

console.log(li);

let frm = document.getElementById("task-form");
frm.style.backgroundColor ='#333';

document.body.addEventListener('click',onClick);
function onClick(e){
    
    console.log("Ok");
    console.log(e.target.parentElement);
}
localStorage.setItem('name','Olu')