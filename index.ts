//Questioon no 6

let personname: string = "\t Abdul Rehman \nArif\n \t ";
console.log ("name with whitespace ");
console.log(personname);
let trimpersonname: string = personname.trim();
console.log ("personname with trim ");
console.log (trimpersonname);
console.log("*------------*");
//question no 7
console.log (4+4);
console.log(16-8);
console.log(4*2);
console.log(64/8);
console.log("*------------*");
//Question no 8
console.log("-------------------");
console.log (4+4);
console.log("-------------------");
console.log(16-8);
console.log("-------------------");
console.log(4*2);
console.log("-------------------");
console.log(64/8);
console.log("-------------------");
console.log("*------------*");
//Question no 9
let num: number = 381;
let message : string = ("Idreesia.com");
console.log(message);
console.log(num);
console.log("*------------*");
//Question no 10
let comment :string = ("This program show my name with trim and without trim");
console.log(comment);
let personname1: string = "\t Abdul Rehman Arif \t ";
console.log ("Name with whitespace ");
console.log(personname1);
console.log("*------------*");
let trimpersonname1: string = personname.trim();
console.log ("Personname with trim Whitespaces  ");
console.log (trimpersonname1);
console.log("*------------*");
//Question no 11
let namesarray = ["AbdulRehman","Abdullah " , "Abdul raheem  ","AbdulKareem","ETC"];

console.log(namesarray);
console.log("*------------*");
//Question no 12
const  namesarray1: string[] = ["AbdulRehman","Abdullah " , "Abdul raheem  ","AbdulKareem","ETC"];
const  messages: string ="Salam, {name}!Where are you from   ";
for (const name of namesarray1)
{
    const personalizedmessage = messages.replace("{name}",name) ;  
    console.log(personalizedmessage);
}
console.log("*------------*");
//Question no 13
const carsnames: string[] = ["Toyota","Honda","Suzuki","Tesla","PArado"];
const messages1 : string ="I would like {name} car   ";
for(const name of carsnames){
    const personalizedmessage1  = messages1.replace("{name}",name);
    console.log(personalizedmessage1);
}
console.log("*------------*");
//Question no 14
const guestlist : string[]=["Ali","Abdul rehman","Abdullah"];
const message2:string ="Salam, {name}! you are invited for  dinner this night. ";
for(const name of guestlist)
{
    const personalizedmessage2 = message2.replace("{name}",name);
    console.log(personalizedmessage2);
}
console.log("*------------*");
//Question no 15


