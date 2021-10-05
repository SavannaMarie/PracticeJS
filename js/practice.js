

/*
        Javascript Practice Exercises
--------------------------------------------

 */

// Return true if one of the numbers is 100
// or if the sum of the two numbers is 100

function numberCheck(x, y) {
    if (x === 100 || y === 100 || x + y === 100) {
        return true;
    } else {
        return false;
    }

}

// Write a JS program to get the extension of a filename

function getFileName(str){
    return str.slice(str.lastIndexOf("."));
}

//GET THE DATE FUNCTION
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') {
    if (minute===0 && second===0)
    {
        hour=12;
        prepand=' Noon';
    }
    else
    {
        hour=12;
        prepand=' PM';
    }
}
if (hour===0 && prepand===' AM ')
{
    if (minute===0 && second===0)
    {
        hour=12;
        prepand=' Midnight';
    }
    else
    {
        hour=12;
        prepand=' AM';
    }
}
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


//Guess random integer. tells you if youre right or wrong

// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log("Correct number: " + num);
const gnum = prompt('Guess the number between 1 and 10');
if (gnum === num)
    console.log('Matched');
else
    console.log('Not matched, your number was ' + gnum);

//Write a JavaScript program to get the website URL (loading page)
// console.log(document.URL);


//Remove a character at the specified position of a given string and return the new string
function remove_character(str, char_pos)
{
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

//

//Reverse a string
function reverseString(s) {
    // Create the result list
    const result = [];
    // Start from the end of the string and iterate towards the start
    for (let i = s.length-1; i >= 0; i -= 1) {
        // Push the current char in the list
        result.push(s[i]);
    }
    // Combine the result in a string
    return result.join('');
}
// Examples
console.log(reverseString(""))
console.log(reverseString("abc"))
console.log(reverseString("aaabbbcccd"))


function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
}



"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    case "red":
        console.log("You are red");
        break;
    case "orange":
        console.log("You are orange");
        break;
    case "yellow":
        console.log("You are yellow");
        break;
    case "green":
        console.log("You are green");
        break;
    case "blue":
        console.log("You are blue");
        break;
    default:
        console.log("Color is indigo or violet");
}
// TODO: create a case statement that will handle every color except indigo and violet
// TODO: when a color is encountered log a message that tells the color, and an object of that color
//       example: Blue is the color of the sky.

// TODO: create a default case that will catch indigo and violet
// TODO: for the default case, log: I do not know anything by that color.
