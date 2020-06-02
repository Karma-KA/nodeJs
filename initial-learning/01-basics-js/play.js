var name10 = 'max';
//use of let and const : another way of defining variables 
//let : variable values can be modified
// const : variable value cannot be modified
const myName ='Ankit'
let age10 = 29;
console.log(name10);
console.log(myName);
console.log(age10);
age10 = 30;
console.log(age10);
//myName = 'kumar'; // this line will throw the error as const var is not allowed to be changed.
console.log(myName); 

//=========================================================================
// use of Arrow sign insteed of function while declaring the function.
const calc1 = function (num1, num2) {
    num3 = num1 + num2;
    return ('sum of numbers : '+num3);
}
const calc2 = (num1, num2) => {
    num3 = num1 + num2;
    return ('sum of numbers : '+num3);
}
const calc3 = (num1,num2) => num1+num2; // this can be done for one line function
const addOne = a => a+1; // small brackets are not required for single var
const randomAdd = () => 2+3; // small brackets are needed when no params
console.log(calc1(4,5));
console.log(calc2(3,4));
console.log('sum of numbers : '+calc3(2,3));
console.log(addOne(2));
console.log(randomAdd());

//=====================================================================
//new way of defining objects and having function in them. Also, array and array methods
const person = {
    name: 'Ankit',
    age: 29,
    // arrow function should not be used inside the object. this operator links variable to global and show will not work with arrow function
    // greet: () => {
    //     console.log('Hello '+this.name);
    // }
    greet() {
        console.log('Hello '+this.name);
    }
}
console.log(person);
person.greet();
console.log('your hobbies are :');
const hobbies = ['games', 'sports','music'];
for (let hobby of hobbies) {
    console.log(hobby);
}
// use of map function in arrays. Modifies arrays without changing the original copy
console.log(hobbies.map(hobby1 => 'Hobby: ' + hobby1));
// Object and arrays are reference types. 
hobbies.push('movies'); // note that hobbies is defined as const, still we are modifying the array. this proves that objects are referenced type (pointer)
console.log(hobbies); 
//Immutabilities
const copiedArray1 = hobbies.slice();
console.log(copiedArray1);
const copiedArray2 = [hobbies]; //additional [] can be noticed in output
console.log(copiedArray2);
const copiedArray3 = [...hobbies]; // this function copied everything from existing object
console.log(copiedArray3);
//toArray - converting data into array.
const toArray1 = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
}
console.log(toArray1(1,2,3,4)); // note that I have passed additional arg, which will be ignored by js and not errored out
// rest operator ('...') can be used to dynamically add data in array
const toArray2 = (...args) => [args];
console.log(toArray2(1,2,3,4,5,6));
//======================================================================
// destructuring
const person1 = {
    name: 'Ankit',
    age: 29,
    greet() {
        console.log('Hello '+this.name);
    }
}
const printName = (personData) => {
    console.log(personData.name);
}
printName(person1); // until here it is normal definition
// below is way for destructuring
const printName1 = ({name}) => {  // this is destructurig, where name attribute is taken from person object. {} this is how it is included
    console.log(name);
}
printName1(person1); 
// another way of using destructuring 
const {name, age} = person;
console.log(name,age);
// this can also be done for arrays.
const hobbies1 = ['games', 'sports','music'];
const [hobby10, hobby11] =hobbies1; // any names can be chosen in array because they do not have any name. In case of objects this will not hold true.
console.log(hobby10,hobby11);