//stack memory are used for primitive datatypes
//heap memory are used for non-primitive datatypes

//stack memory
let name = "Vishesh";
let anotherName = name;
anotherName = "Bimla";
console.log(anotherName); //output ==> Bimla


//heap memory
let userOne = {
    name: "Vishesh",
    email: "vishu@gmail.com"
}
let userTwo = userOne;

userTwo.email = "vishu@google.com";

console.log(userOne); //output ==> { name: 'Vishesh', email: vishu@google.com' }
console.log(userTwo); //output ==> { name: 'Vishesh', email: vishu@google.com' }

