// question 1

let input_1 = +prompt("enter no 1");
let input_2 = +prompt("enter no 2");

function parent_function(value_1){
    return function child_functon(value_2){
        console.log(value_1 + value_2);
        // let a = 4;//scope error
    }
}

let function_1 = parent_function(input_1);
let function_2 = function_1(input_2);



//Question:2

function searchArray(array, value) {
    // Base case: if the array is empty, return false
    if (array.length === 0) {
      return false;
    }
    // Base case: if the first element of the array is the value, return true
    if (array[0] === value) {
      return true;
    }
    // Recursive case: search the rest of the array
    return searchArray(array.slice(1), value);
    constarr =[1, 2, 3, 4, 5]
const value = 3;
console.log(searchArray(arr, value)); // Output: true
  }

//Question:3

let input_text = prompt("enter content:")
let para = document.createElement("p");
let parent = document.getElementsByTagName("html")[0];
// console.log(parent);
function para_work(string) {
    para.innerHTML = string;
    parent.appendChild(para);
    parent.insertAdjacentElement("afterbegin", para);
}

para_work(input_text)

// //Question:4

function addListItem(Muhammad) {
    const ul = document.querySelector('ul'); // Get the unordered list element
    const li = document.createElement('li'); // Create a new list item element
    li.textContent = afshan; // Set the text content of the list item
    ul.appendChild(li); // Add the list item to the end of the unordered list
  }
  addListItem('New list item');
 
  
// //Question :5

localStorage.clear()

let object_1 = {
    name:"Muhammad",
    age: 23,
    phone_no:"03492991343",
    height:"5",
    cnic: "2667800894920",
    eng_marks:23,
    urdu_marks:65,
    maths_marks:100
}


let object_2 = {
    name:"usama",
    age: 15,
    phone_no:"94500684",
    height:"4'3",
    cnic: "8058543456-9",
    eng_marks:90,
    urdu_marks:40,
    maths_marks:80
}


let object_3 = {
    name:"Dilawar",
    age: 14,
    phone_no:"94500684",
    height:"5'6",
    cnic: "8058543456-9",
    eng_marks:50,
    urdu_marks:80,
    maths_marks:60
}

function object_saving(key , value){
    let new_object = JSON.stringify(value);
    localStorage.setItem(key, new_object);
}


object_saving("data of Dilawar" , object_1);



// // //Question :6

function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  const myObject = {name: "John", age: 30};
  saveToLocalStorage("myKey", myObject);

// // //Question :7

function getObjectFromLocalStorage(key) {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else {
        return null;
      }
    }}
          catch(error) {
      console.error(`Error retrieving item from localStorage: ${error.message}`);
      return null;
    }
    

// //   //Question:8

  function saveObjectToLocalStorage(object) {
    // Save each property to localStorage
    for (let property in object) {
      localStorage.setItem(property, JSON.stringify(object[property]));
    }
  
    // Retrieve the object from localStorage
    const retrievedObject = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObject[key] = JSON.parse(localStorage.getItem(key));
    }
  
    // Return the retrieved object
    return retrievedObject;
  }


