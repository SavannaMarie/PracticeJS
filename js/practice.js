

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