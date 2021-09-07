var wishMe="Happy Birthday";

console.log(wishMe)
var myName="Ghulam Yazdani's";
var num = 20;
var myStr = myName+ num +wishMe;
console.log(myStr);
 function wordBlanks(myNoun,myAdjective,myVerb,myAdverb) {
     var result = "";
     var s=" ";
     result+="The"+s+ myAdjective+s +myNoun+s+myVerb+s+myAdverb;

     return result;
 }
 console.log(wordBlanks("dog","big","ran","quickly"));
 var array = ["dog","big","ran","quickly"];
 console.log(array[array.length -1]);
 var array2 = [[1,2,3],[9,4,6],[7,8,9],[[10,11,12],3,7]];
 console.log(array2[3][0][2])
//  Add an element to an array(push)
 array.push("was");
 console.log(array);
//  Remove an element from an array(pop)
array.pop();
console.log(array); //Element is removed from the last
//  Remove an element from the array(shift)
array.shift();
console.log(array); //Element is removed from the front
//  Add an element to an array(unshift)
array.unshift("dog");
console.log(array); //Element is added to the front

var myGloabl=10;

function fun1() {
    oppsGlobal = 20 ;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output+= "myGlobal:" + myGlobal;
    }
    console.log(output);
}
fun2();

function nextInLine(arr,item){
    arr.push(item);
    return item;
}
var testArr = [1,2,3,4,5];
console.log("Before:", JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:",testArr);
var a,b;
function testStrict(a,b) {
    if (a === b){
        return "True they are equal";
    }
    return "False";
}
console.log(testStrict(4,"4"));

var a=4,b=9;

calculation = Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
console.log(calculation);
                                              //Objects

var ourDog = {
    "name": "Dog",
    "legs": 4,
    "tails":1,
    "friends":["everything!"] 
};//object are just like dictionaries in python
console.log(ourDog.name);
console.log(ourDog["legs"]);

delete ourDog.friends;

var storages = {
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger seat": "yes"
        }
    }
}

console.log(storages.car.inside["glove box"]);

var myPlants = [
    {
        "Hello":"world"    },
    {
        "asjad": "sadad",
         list: ["ASD","adw"]
    }
]
// For Random number generation

function randomWholeNumbers() {
    return Math.floor(Math.random()*100);
    
}
console.log(randomWholeNumbers());

// For random number generation between two numbers

function myRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;    
}
console.log(myRandom(5,15));

// Cover int to integer 
function convertIntToInteger(str){
    return parseInt(str,2);
}
console.log(convertIntToInteger("10110"));

// Ternary operator
function checkSign(num){
    return num > 0? "positive": num<0 ?"negative" :"zero";
}
console.log(checkSign(-3));

// Freeze constant objects
function freezeObj(){
    "use strict";
    const Math_Constant ={
        pi: 3.14  
    };

    object.freeze(Math_Constant);

}
// Arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]))

const realNumberArray=[4,,5.6,-9.8,3.14,42,6,8.34,-2]

const squareList = (arr) => {

const squaredIntegers =  arr.filter(num => Number.isInteger(num)&&num>0).map(x => x*x);
return squaredIntegers;

};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// dosr function
console.log(add(2,4))
function check(name) {
    switch (name) {
        case Ghulam:console.log("Yes")
            
            break;
    
        default:
            break;
    }
}
const lastName = "Yazdani"
const sentence = "Hello" + " "+ lastName + "!How are you?";
const sentenceWithTemplate = "Hello ${lastName} How are you?"
console.log(sentence);
console.log(sentenceWithTemplate);

// 
console.log(sentence.toUpperCase());

const button = document.querySelector('.button');
button.addEventListener('click',function(){
    alert("Hello");
})
