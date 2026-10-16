const str = "Code To the Core";
const str2 = 'Code To the Core';
const str3 = `Code To the Core`;


for(let i = 0; i < str.length; i++){
    //print the string as many time as the length of the string//
    console.log(str);

    //print each character of the string//
    console.log(str[i]);
}

//print the string in reverse order//
for(let i = str.length - 1; i >= 0; i--){
    console.log(str[i]);
}


const firstName = "Cornell";
const lastName = "Robertson";
//concatentation//
const fullName = "Cornell" + " " + " Robertson";
 console.log(firstName + " " + lastName);
 console.log(`${firstName} ${lastName}`);
 console.log(fullName);

 
//print the first and last name in mixed order//
 let mixedName = "";
  for(let i = 0; i < str.length; i++){
mixedName += firstName[i];
mixedName += lastName[i];
  }
  console.log(mixedName);


const myLongString = "This a Long string";
let count = 0;
let vowels= "aeiouAEIOU";

for(let i = 0; i < myLongString.length; i++){
    if(vowels.includes(myLongString[i].toLowerCase())){
        count++;

    }
}
console.log(count);


// charAt(): takes  in a number index of a character and returns the character at that index //
console.log(myLongString.charAt(0));

// slice(): takes in a start and end index and returns a new string with the characters between the start and end index//
const myLongString2 = myLongString.slice(0, 5);
console.log(myLongString.slice(4))

// with both a start and end argument, we grab everything between the start and end but exclude the char at the end index.
console.log(myLongString.slice(4, 8))

const first = "johnny"
const last = "Jones"

console.log(`${first.slice(0, 1).toUpperCase() + first.slice(1)} ${last.charAt(0).toUpperCase() + last.slice(1)}`)

//slpit(): will turn a string into an array, based on it's delimiter (separator) // 
// use a space char to break string up into individual words//
console.log(myLongString.split(' '))

// Break up the string into individual chars using a no space char//
console.log(myLongString.split(''))

// reverse a string //
function reverseStr(str){
    let reverseString = " ";
    for(let i = str.length - 1; i >= 0; i--){
       reverseString += str[i]
    }
}
console.log(reverseStr('hello'));


let str1 = "hello";
let reversedStr = str1.split('').reverse().join('');
console.log(reversedStr);



















