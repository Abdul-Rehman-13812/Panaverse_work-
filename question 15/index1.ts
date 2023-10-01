// question 15 
let gustarr = ["Abdul rehman ","Abdullah","Arham"];
const message2:string ="Salam, {name}! you are invited for  dinner this night. ";

console.log(gustarr[2],"cannt make the dinner");
let new_person : string =  "Abdul karim";
console.log ("replace  ", gustarr[2], "with", new_person);
for(const name of gustarr){
    const pmesage = message2.replace ("{name}",name);
    console.log(pmesage);
   
}
console.log("*------------*");
//question 16 

const  gustarr1: string [] = ["Abdul rehman ","Abdullah","Arham"];
const message4 :string = "Sorry! we can invite only two people for dinner for space problem";

console.log(message4);

gustarr1.pop(); 

const message5:string = "salam!  you are still invited for this dinner ";
console.log(message5);

console.log (gustarr1);

// const message5:string = "salam! {name} you are still invited for this dinner "
// for(const name of gustarr1){
//     const pmesage = message5.replace ("{name}",name);
//     console.log(pmesage);
   
// }
console.log("*------------*");
//question 17
let arrplaces : string []= ["esraeeal", "libia", "bangadash ", "itly","france"];

console.log(arrplaces);
console.log("*------------*");





//Question 25
let alien_color:string='Green';
if(alien_color==='Green')
{
    console.log('You just earned 5 points');

}
console.log("*------------*");
//Question 26
if(alien_color==='Green')
{
    console.log('You just earned 5 points');

}
else
{
    console.log('You just earned 10 points');

}
console.log("*------------*");
//Question 27
if(alien_color==='Green')
{
    console.log('You just earned 5 points');

}
else if(alien_color==='Yellow')
{
    console.log('You just earned 10 points');
}
else
{
    console.log('You just earned 15 points');

}
let personAge:number=22;
let users=[];
if(users.length===0)
{
    console.log('We need to find some users');
}
if(personAge<2)
{
    console.log('Person is Baby');
}
else if(personAge===2 ||personAge<4)
{
console.log('Person is Toddler');
}
else if(personAge===4 ||personAge<13)
{
console.log('Person is Kid');
}
else if(personAge===13 ||personAge<20)
{
console.log('Person is Teenager');
}
else if(personAge===20||personAge<65)
{
console.log('Person is Adult');
}
else
{
    console.log('Person is Elder' );
}
users=[""];
//Display to check list is empty
for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
}
console.log("*------------*");
//Question 29
let fruitArray:string[]=['Apple','Banana','Mango','Grapes','Peach','Orange'];
let favourite_Fruit:string[]=['Apple','Grapes','Banana'];
if(fruitArray.includes('Banana'))
{
    console.log('You Really Like Banana');
}
if(fruitArray.includes('Apple'))
{
    console.log('You really like Apple');
}
if(fruitArray.includes('Mango'))
{
    console.log('You really like Mango');
}
if(fruitArray.includes('Orange'))
{
    console.log('You really like Orange');
}
if(fruitArray.includes('Peach'))
{
    console.log('You really like Peach');
}
else 
{
    console.log("Not Found");

}
console.log("*------------*");
//Question 30
let userNameArray:string[]=['Ahsaan','Shiza','Hanaan','Admin','Manaan','Hashir'];
for (let i=0;i<userNameArray.length;i++)
{
    if(userNameArray[i]==="Admin")
    {
        console.log(`Hello ${userNameArray[i]}, would you like to see a status report?`);
    }
    else
    {
        console.log(`Hello ${userNameArray[i]}, thank you for logging in again.`);
    }
}
console.log("*------------*");
//Question 32
let current_users: string[] = ["Manaan", "Ahsaan", "Shiza", "Hanaan", "Hashir"];
let new_users: string[] = ["Shawaal", "Nancy", "Maham", "Manaan", "ahsaan"];

for (let i = 0; i < new_users.length; i++) {
  for (let j = 0; j < new_users.length; j++) {
    if (
      new_users[i].toLowerCase() === current_users[j].toLowerCase() ||
      new_users[i].toUpperCase() === current_users[j].toUpperCase()
    ) {
      console.log(
        new_users[i],
        " username has already been used. Enter a new username."
      );
      break;
    }
  }
}

for (let i = 0; i < new_users.length; i++) {
  for (let j = 0; j < 1; j++) {
    if (
      new_users[i].toLowerCase() !== current_users[j].toLowerCase() ||
      (new_users[i].toUpperCase() !== current_users[j].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 1].toLowerCase()) ||
      (new_users[i].toUpperCase() !== current_users[j + 1].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 2].toLowerCase()) ||
      (new_users[i].toUpperCase() !== current_users[j + 2].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 3].toLowerCase()) ||
      (new_users[i].toUpperCase() !== current_users[j + 3].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 4].toLowerCase()) ||
      new_users[i].toUpperCase() !== current_users[j + 4].toUpperCase()
    ) {
      console.log(new_users[i], " username is available.");
    }
  }
}
console.log("*------------*");
//Question 33
let ordinal_number_array:number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<ordinal_number_array.length;i++)
{
    if(ordinal_number_array[i]===1)
    {
        console.log(`${ordinal_number_array[i]}st`);
    }
    else if(ordinal_number_array[i]===2)
    {
        console.log(`${ordinal_number_array[i]}nd`);
    }
    else if(ordinal_number_array[i]===3)
    {
        console.log(`${ordinal_number_array[i]}rd`);        
    }
    else
    {
        console.log(`${ordinal_number_array[i]}th`);
    }
}
console.log("*------------*");
//Question 34
let pizza_array:string[]=['Chicken Supreme','Pepproni','Chicken Tikka'];
for(let i=0;i<pizza_array.length;i++)
{
    console.log(pizza_array[i]);
}
for(let i=0;i<pizza_array.length;i++)
{
    console.log(`I like ${pizza_array[i]}`);
}

console.log('I really love Pizza');
console.log("*------------*");
//Question 35
let animal_array:string[]=['Wolf','Cat','Dog'];

for(let i=0;i<animal_array.length;i++)

{

    console.log(animal_array[i]);

}




for(let i=0;i<animal_array.length;i++)

{

    console.log(`${animal_array[i]} would be make a great pet.`);

}




console.log('They are all predatory animals that are known for their hunting skills and ability to catch their prey.');
console.log("*------------*");
//Question 36
function make_shirt1(size:string, msg:string)
{
console.log(`Shirt size is ${size} and the message printed on it ${msg}`);

}
make_shirt('Medium','Never Give Up');
console.log("*------------*");
//Question 37
function make_shirt(size:string, msg:string="I Love Typescipt")
{

console.log(`Shirt size is ${size} and the message printed on it ${msg}`);

}

make_shirt('Large');
make_shirt('Medium');
make_shirt('Small','Never Give Up');
//Question 38
function describe_city(country:string='Pakistan',city:string)
{
console.log(`${city} is in ${country}`);
}

describe_city("Pakistan","Karachi");
describe_city("Pakistan","Lahore");
describe_city("Turkey","Istanbol");
//Question 39
function city_country(city:string,country:string):string
{
    let combine=city+","+country;
return combine;
}

let fullName:string=city_country("Lahore","Pakistan");
console.log(`"${fullName}"`);
fullName=city_country("California","America");
console.log(`"${fullName}"`);
fullName=city_country("Istanbol","Turkey");
console.log(`"${fullName}"`);
console.log("*------------*");
//Question 40
function show_magicians(arr:string[])
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
let magician_array:string[]=["Joker","Howard","Harry Potter"];
show_magicians(magician_array);
console.log("*------------*");
