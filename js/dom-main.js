"use strict";

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);



// Add Item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new LI element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text-node with input value
    li.appendChild(document.createTextNode(newItem));

    // add text node to list
    itemList.appendChild(li);

    // create delete button element
    var deleteBtn = document.createElement('button');

    // give button a class
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"

    // append text node to button
    deleteBtn.appendChild(document.createTextNode('x'));

    // add delete button to the li
    li.appendChild(deleteBtn);

    // add li to the list
    itemList.appendChild(li);
}

// remote item
function removeItem(e) {
    // target button with 'delete' class
    if(e.target.classList.contains('delete')){
    // if confirmed remove parent node of button (li)
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
















