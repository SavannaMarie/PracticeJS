

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
