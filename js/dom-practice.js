"use strict";

// Button 1 ----------------------
var listener = function() {
    var mainHeader = document.getElementById('main-header');
    mainHeader.innerHTML = 'Javascript is cool!'
}
var b1 = document.getElementById('b1');
b1.addEventListener('click', listener);

// Button 2 -----------------------
var listener2 = function () {
    var subHeader = document.getElementById('sub-header');
    subHeader.style.color = 'blue';
}
var b2 = document.getElementById('b2');
b2.addEventListener('click', listener2);

// Button 3 --------------------
var listener3 = function() {
    var listItems = document.getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        if ((i + 1) % 2 === 0) {
            listItems[i].style.color = 'grey';
        } else if (listItems[i].getAttribute('data-dbid') === '1') {
            listItems[i].style.color = 'rebeccapurple';
        }
    }
}

var  b3 = document.getElementById('b3');
b3.addEventListener("click", listener3);

// Button 4 ---------------------
var listener4 = function() {
    var subParagraphs = document.getElementsByClassName('sub-paragraph');
    subParagraphs[0].innerText = 'Mission Accomplished!';
}
var  b4 = document.getElementById('b4');
b4.addEventListener("click", listener4);

// DOM PRACTICE

$(document).on('keypress',function(e) {
var gKey = e.key.toLowerCase();
    if(gKey === 'g') {
        $('body').css('background', 'purple')
    }
});