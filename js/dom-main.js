"use strict";
// variables
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



// Events using our variables

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// search event
filter.addEventListener('keyup', filterItems)

// Clear form event
form.addEventListener('keyup', clearForm)


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

    // clear the form after submitting
    document.getElementById('addForm').reset();
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

// search item
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get all LIs
    var items =itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        // if list items match searchbox value (if true)
        if(itemName.toLowerCase().indexOf(text) !== -1){
        // display matches
            item.style.display = 'block';
        } else {
        // if false don't display anything
            item.style.display = 'none';
        }
    });
}











