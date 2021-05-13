// BEGIN DOM NOTES
// console.log(document.all[10]);
// document.all[10].textContent = "This is a test!!"


// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello!";
// headerTitle.innerHTML = '<h3>Hello!</h3>';
//
// header.style.borderBottom = 'solid 3px black'


// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2!';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow'
//
//
// // change background on all class items
// for (i =0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey'
// }


// get elements by tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2!';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow'


// change background on all class items
// for (i =0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'grey'
// }


// QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'
//
// var input = document.querySelector('input');
// input.value = 'Hello!'
//
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send"
//
// var item = document.querySelector('.list-group-item');
// item.style.color = "red";
//
// var lastItem = document.querySelector('.list-group-item:last-child')
// ;
// lastItem.style.color = "blue"
//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "coral";


//QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
//
// titles[0].textContent = "hello!"
//
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "rebeccapurple";
//     even[i].style.backgroundColor = "green";
// }


// TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
// parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);


// ParentElement interchangable
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// firstchild
// console.log(itemList.firstChild);
// // firstelement child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "Hello 1"


//Next Sibling
// console.log(itemList.nextElementSibling);


// previous sibling
// console.log(itemList.previousSibling);
// // previoud element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'grey'
// console.log(itemList)


// create element
// create a div
//
// var newDiv = document.createElement('div');
// console.log(newDiv);
//
// add class
// newDiv.className = 'hello';
//
// add new id
// newDiv.id = 'hello1';
//
// add atr
// newDiv.setAttribute('title', 'hello Div!');
//
// create new text node
// var newDivText = document.createTextNode('Hello World!');
//
// add text to div
// newDiv.appendChild(newDivText);
//
// two container classes. we want the one in the header
// var container = document.querySelector('header .container');
//
// var h1 = document.querySelector('header h1');
//
// newDiv.style.fontSize = '30px'
//
// container.insertBefore(newDiv, h1);
//
//


// EVENTS //
//
// create event for button click
// var button = document.getElementById('button').addEventListener
// ('click', buttonClick);
//
// function being passed through the event
// function buttonClick(event) {
    // console.log('Button Clicked!');
    // document.getElementById('header-title').textContent = "Changed!";
    // document.querySelector('#main').style.backgroundColor = 'blue';
    // console.log(event);
    //
    // console.log(event.target)
    // console.log(event.target.id);
    // console.log(event.target.classList);
    //
    // console.log(event.type);
    //
    // console.log(event.clientX);
    // console.log(event.clientY)
    //
    // console.log(event.offsetX);
    // console.log(event.offsetY);
    //
// }


// MOUSE EVENTS
//
// var button = document.getElementById('button');
// var box = document.getElementById('box');
// var body = document.querySelector('body');
//
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseleave', runEvent);
//
// MOUSEENTER ONLY FOR ELEMENT ITSELF. MOUSEOVER IS FOR ANY INNER ELEMENTS
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
//
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
//
// box.addEventListener('mousemove', runEvent);
//
// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');
//
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
//
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
//
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
//
// itemInput.addEventListener('input', runEvent);
//
// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)
//
// form.addEventListener('submit', runEvent);
//
// function runEvent(e){
//     e.preventDefault();
//     console.log('Event Type: ' + e.type);
// //
//     console.log(e.target.value);
    // document.getElementById('output').innerHTML ='<h3>' + e.target.value + '</h3>';
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
//
    // document.body.style.backgroundColor = 'rgb('+e.offsetX+', 40, '+e.offsetY+')';
    // box.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)';
// }

//settimeout
// prints every number
for (let i = 0; i < 10; i++){
    setTimeout(() => console.log(i));
}