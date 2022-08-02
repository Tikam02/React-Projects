// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// edit option
let editElement;
let editFlag = false;
let editId = "";    

// ****** EVENT LISTENERS **********

// Submit form

form.addEventListener('submit',addItem);

// ****** FUNCTIONS **********

// const addItem = ((e) => {
function addItem(e) {
    e.preventDefault();
    console.log(grocery.val);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // console.log(id);
    if(value  && !editFlag){
        console.log("add item to the list");
    }else if (value && editFlag){
        console.log("editing");
    }else{
        displayAlert("please enter value","danger")
    }
}

const displayAlert= ((text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    //Remove Alert
    setTimeout(function () {
        alert.textContent = text;
        alert.classList.remove(`alert-${action}`);

    },1000);
}) 
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********