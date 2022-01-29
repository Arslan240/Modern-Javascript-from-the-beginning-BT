let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // must start with and case insensitive
re = / world$/i; // must ends with 
re = /^hworld$/i; // must start with and ends with. But it means hworld is the actual word. so it'll be false.
re = /^h.orld$/i; // Matches any ONE character. .means there can be any character in place of .
re = /h*orld/i; // Matches any combination character. 

re = /^gra?e?y$/i; // Optional Character gray has two spellings, so make e or a optional using '?' symbol
re = /^gra?e?y\?/i; // Escape character - '\' - a backslash. We want ? to be a part of the string not a character for functionality. So we escape it.


// Brackets [] - Character sets
re = /gr[ae]y/i; //Must be an a or e. no character will not pass such as ? operator case.
re = /gr[^ae]y/i; // It'll match anything but ae. ^ is kind of not character
re = /[A-Z]r[ae]y/; // It's range. Any uppercase letter is acceptable.
re = /[A-Za-z]r[ae]y/; // It'll accept any letter at start, upper or lower case
re = /[0-9]ray/; //match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; //it'll look for 2 ls where l is. We put it after the letter we want to check
re = /Hel{2-4}o/i; // 2-4 l are acceptable. ranges

// Parenthesis () - Grouping, used along with quantifiers
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/;      // Word character - alphanumber or _ . It looks for atlease one word character.
re = /\w+/;     // this + means it'll look at one or more word characters.
re = /\W+/;    // /\W/  // Non word character class. Everything other than alphanumeric and _.
re = /\d/; //match any digit
re = /\d+/; //match any digit 0 or more times.
re = /\D/; //match any non digit






// String to match
let str = 'Hello World';
str = 'gray'; // becz a and e are optional , none of them present would still make it true
str = 'grey?'; 
str = 'grhy'; // [^ae] 
str = 'vray'; 
str = 'Hello'; // /Hel{2}o/i 
str = 'Helllo'; // /Hel{2-4}o/i 
str = '3x3x3x'; // /([0-9]x){3}/ 
str = '3x3x3x'; 
str = '+#$sdfas%^&*sdfasd'; 


// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  }
  else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re,str);






// let re;
// re = /Hello/i; // i makes case insensitive  //to write regular expressions in javascript we use forward slashes at the start and at the end.
// re = /hello/g; // Global search. it'll search all the matches not just the first one.

// console.log(re);
// console.log(re.source);

// exec() - return results in an array if there's a match otherwise null. We pass the string to exec which we want to check.
// const result = re.exec('Hey girl, Damn. Hello.'); // the index is actually the index of first character of Hello in the string.
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.length); //idk what is length in it
// console.log(result.input); //input string

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null. It's actually array method. It runs a little bit different than exec() function.
// const str = 'Hello There';
// console.log(str.match(re)); //we pass the regex to the function instead of string.

// search() - returns index of first character of first match other wise returns -1.
// const str = 'Hey, hello there';
// console.log('index: '+str.search(re));

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);