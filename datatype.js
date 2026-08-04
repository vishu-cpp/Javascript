console.log("null > 0", null > 0);   //output: false              //comparison operator 
console.log("null == 0", null == 0);  //output: false            //relation operator
console.log("null >= 0", null >= 0);  //output: true             //relation operator
console.log("null < 0", null < 0);   //output: false              //relation operator
console.log("null <= 0", null <= 0);  //output: true             //relation operator

console.log("undefined > 0", undefined > 0);  //output: false         //comparison operator
console.log("undefined == 0", undefined == 0); //output: false        //relation operator
console.log("undefined >= 0", undefined >= 0); //output: false        //relation operator
console.log("undefined < 0", undefined < 0);  //output: false         //relation operator
console.log("undefined <= 0", undefined <= 0); //output: false        //relation operator

//comparison operator do not convert null to 0 and relational operator convert the null to 0 

//primitive datatypes
//string            "hello"
//number            123
//boolean           true/false
//null              null
//undefined         undefined
//symbol            Symbol("hello")
//bigint            123n

//non-primitive datatypes
//object            {name: "John", age: 30}
//array             [1, 2, 3]
//function          function() {}

let arr = [1, 2, 3, 4, 5];
console.log("type of arr=", typeof arr);        //object

let obj = {name: "John", age: 30};
console.log("type of obj=", typeof obj);        //object

let func = function() {};
console.log("type of func=", typeof func);       //function

let sym = Symbol("hello");
console.log("type of sym=", typeof sym);        //symbol

let big = 123n;
console.log("type of big=", typeof big);        //bigint

let str = "hello";
console.log("type of str=", typeof str);        //string

let num = 123;
console.log("type of num=", typeof num);        //number

let bool = true;
console.log("type of bool=", typeof bool);       //boolean

let nul = null;
console.log("type of null=", typeof nul);        //object

let und = undefined;
console.log("type of undefined=", typeof und);        //undefined