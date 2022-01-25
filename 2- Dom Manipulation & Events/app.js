// ------------------------ LOCAL AND SESSION STORAGE -------------------

  // local storage is a storage that remains even after closing the browser
  // localStorage.setItem('name', 'John'); //we store in the state of key value pairs.
  // localStorage.setItem('age', '30');

  // //session storage deletes when the session ends or browser is closed.
  // sessionStorage.setItem('name','John');

  // Remove from storage
  // localStorage.removeItem('name'); // we pass key

  //clear local storage
  // localStorage.clear();

  //get from storage
  // const name = localStorage.getItem('name');
  // const age = localStorage.getItem('age');
  
  // console.log(name, age);
  
  // We are going to use local storage to add tasks from form to the storage 

  //submit event
  // document.querySelector('form').addEventListener('submit',
  // function(e){
    
  //   const task = document.getElementById('task').value; //here we get enterd value as task.
  //   console.log(task);
    
  //   //now the problem is when new stuff is added to local storage the old stuff is replaced. So we store in the form of array .
  //   let tasks;
  //   tasks = localStorage.getItem('tasks');

  //   if(tasks === null){
  //     tasks = []; //we set it to empty array cause
  //   }
  //   else { //some tasks are already stored in the local storage
  //     tasks = JSON.parse(tasks); //different than brad traversy, because tasks returned by localstorage is a string and not an array, we convert it to an array using JSON.parse.
  //   }

  //   //now tasks is array we push newly added task to it.
  //   tasks.push(task);

  //   //save
  //   //now setItem only accepts string, we're gonna convert tasks array to string using stringify method of JSON
  //   localStorage.setItem('tasks',JSON.stringify(tasks));
  //   alert('task saved');
  //   document.getElementById('task').value = ''; //setting the text field value to empty.
  //   e.preventDefault();

  // });

  // //to loop over all the tasks we need to change it to an array
  // const tasks = JSON.parse(localStorage.getItem('tasks'));

  // tasks.forEach(function(task){
  //   console.log(task);
  // });




// ------------------------ EVENT BUBBLING AND EVENT DELEGATION -------------------

  // Event bubbling -> when we add a specific listener to lower element that same action is seen affecting the parent elements, which is called event bubbling. We can see this by adding similar listener to the child and parent, and then even if we click on child element, listeners in parent elements will also be fired off. SO this is how bubbling works.  

  // document.querySelector('.card-title').addEventListener('click',
  // function(){
  //   console.log('card-title');
  // });

  // document.querySelector('.card-content').addEventListener('click',
  // function(){
  //   console.log('card-content');
  // });

  // document.querySelector('.card').addEventListener('click',
  // function(){
  //   console.log('card');
  // });

  // document.querySelector('.col').addEventListener('click',
  // function(){
  //   console.log('col');
  // });
  

  // EVENT DELEGATION -> In this case we apply listener to the parent element and then use this listener to change some stuff in specific child element. E.g. We can use it to apply listener to all the list items, because by using querySelector() we can apply listener to the first element. But if we apply listener to the parent element we'll use conditions and check the specific element clicked to do what we want to do with thos elements.
  // document.body.addEventListener('click', deleteItem);

  // function deleteItem(e) {
  //   e.preventDefault();
   
    //we use e.target.parentElement because we want <a> tag but when clicked on icon we are returned with <i> tag.parent of <i> is <a>.
    //now following logic will fail if we add or remove a class name from html from one element of many of them. So, it's not the best solution.
      // if(e.target.parentElement.className === 'delete-item secondary-content'){  //we check if the element clicked is the cross icon so we can delete that task
      //   console.log(e.target.className);
      // }
  
    //We use classList and check if our specified className is present in that or not. It is better than directly comparing the whole className string.
      // if(e.target.parentElement.classList.contains('delete-item')){
      //   console.log(e.target.parentElement.classList);
      
        //deleting the task the bad way. By hardcoding the number of times we need to get to the correct parent that we want to delete.
        // e.target.parentElement.parentElement.remove(); //parent of <i> is <a> and we are removing the whole <a> tag.
  //     }
  
  // }










// ------------------------ KEYBOARD EVENTS -------------------

// const form = document.querySelector('form'); //grabbing the form element
// const taskInput = document.querySelector('#task');
// const heading = document.querySelector('#task-title');

// // Clear input when form loads
// taskInput.value = ''; 

// listening for a submit event
// form.addEventListener('submit',runEvent);

// when ever a key is pressed, event fires because of keydown.
// taskInput.addEventListener('keydown',runEvent);
// When a key is released
  // taskInput.addEventListener('keyup',runEvent);
// Focus event, when we focus on an input
// taskInput.addEventListener('focus',runEvent);
// Blur event, when we click off of something, blur event is fired.



// function runEvent(e){

  // console.log(`EVENT TYPE: ${e.type}`);
  // console.log(e.type);
  // heading.innerText = e.target.value; // outputting typed value in our heading on screen.

  // console.log(taskInput.value);
  // e.preventDefault();
  // taskInput.value = ''; //to clear the input after submitting the form
// }











// ------------------------ MOUSE EVENTS -------------------

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');


// Click
// clearBtn.addEventListener('click',runEvent);
// double click
// clearBtn.addEventListener('dblclick',runEvent);
// mouse down
// clearBtn.addEventListener('mousedown',runEvent);
// mouse enter , it runs event when mouse is dragged in the element boundary
// card.addEventListener('mouseenter',runEvent);
// mouse leave, it triggers the listener when the mouse is dragged out of element boundary
// card.addEventListener('mouseleave',runEvent);
// mouseover , it's kind of similar to mouseenter and mouseleave, but i can't understand them properly right now.
// card.addEventListener('mouseover',runEvent);
// mouseout
// card.addEventListener('mouseout',runEvent);
// Mousemove , it triggers everytime our mouse moves inside the element to which our listener is attatched.
// card.addEventListener('mousemove',runEvent);



//Event Handler
// function runEvent(e){
//   e.preventDefault();
//   console.log(`EVENT TYPE: ${e.type}`);
  
//   // related to mouse move, We are going to show the coordinates of our mouse on the screen in the form title.
//   const taskTitle = document.querySelector('#task-title'); 
//   taskTitle.textContent = `x: ${e.offsetX} y: ${e.offsetY}`;

//   //changing background color based on the position of mouse
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
// }












// ------------------------ EVENT LISTENERS AND THE EVENT OBJECT -------------------

  // here we declare a new anonymous funciton for event Listener. It's similar to anonymous function in Java which we used in Event Listeners.
  // Also if we are logging some stuff when the element is clicked, it'll just be there as long as we are not redirected to the link. When we are redirected it'll be removed.
  // we can also prevent default behaviour of the link and stay on the same page if a link is specified.
  //When we create an anonymous function in Event Listener, it'll accept an argument of Event object, by using that object we can prevent default behaviour
  // document.querySelector('.clear-tasks').addEventListener('click',
  //   function (event) {
  //     console.log('Clear Tasks clicked');
      
  //     event.preventDefault();
  //   }
  // )

  // Simple Funciton

  // document.querySelector('.clear-tasks').addEventListener('mouseover', onClick)

  // function onClick(e) {
  //   // console.log('clicked');

  //   let val;

  //   val = e;

  //   //Event target element.

  //   val = e.target; //it will give element on which event is attatched
  //   val = e.target.id;
  //   val = e.target.className;
  //   val = e.target.classList;
    
  //   //changing styles or text of target
  //   // e.target.innerText = 'Hello'; //idk why textContent didn't work when I tried

  //   // Event Type
  //   val = e.type

  //   //Time Stamp
  //   val = e.timeStamp;

  //   // Coordinates relative to x and y of the window.
  //   val = e.clientY;
  //   val = e.clientX;

  //   //Coordinates relative to the element itself
  //   val = e.offsetY;
  //   val = e.offsetX;

  //   console.log(val);
  // }







// ------------------------ REMOVING AND REPLACING ELEMENTS -------------------

  // REPLACE ELEMENT
  // const new_heading = document.createElement('h2');
  // // Add id
  // new_heading.id = 'task-title';
  // //New text node
  // const textNode = document.createTextNode('Task List');
  // new_heading.appendChild(textNode);

  // //Get the old element which we are going to replace.
  // const oldHeading = document.getElementById('task-title');
  // // Parent, we need parent because we are gonna use replaceChild() method.
  // const cardAction = document.querySelector('.card-action');

  // // Replace
  // cardAction.replaceChild(new_heading,oldHeading);

  // // console.log(new_heading);

  // //REMOVE ELEMENT
  // const list = document.querySelector('ul');
  // const listItems = document.querySelectorAll('li');

  // // now we're gonna remove a list item
  // listItems[0].remove();

  // //we can remove using list itself and remove the child
  // list.removeChild(listItems[1]); //it's weird that listItems[0] is still in the listItems Array even though we have removed it from list. Or maybe because we have only removed it from parent element and not from the Array itself.

  // //CLASSES AND ATTRIBUTES
  // const firstLi = document.querySelector('li:first-child');
  // const link = firstLi.children[0];

  // let val;

  // //CLASSES
  // val = link.className; // it returns a string of all the class names.
  // val = link.classList; //it returns a list of class names, not a string. It's not an array but we can still access it's elements by index.
  // val = link.classList[0]; //first class name
  // link.classList.add('test'); // adds a new class name to the link
  // link.classList.remove('test');
  // val = link;
  

  // //ATTRIBUTES
  // val = link.getAttribute('href'); //this gives us the value of attributes of the specified element.
  // val = link.setAttribute('href','http://google.com'); //this will set link to specified link
  // val = link.hasAttribute('href'); //tells if the attribute is specified or not.
  // link.setAttribute('title','Google');
  // val = link.hasAttribute('title');
  // val = link;
  // link.removeAttribute('title');


  // console.log(val);




// ------------------------ CREATING  AND INSERTING ELEMENTS FOR DOM -------------------

//we can create new elements and add it to the original 

// const li = document.createElement('li'); //we create new element by passing the name of the element

// //add class
// li.className = 'collection-item'; //here we can get classname from previously present list item from the ul, and assign it to the new item.

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title','New Item'); //first argument is the attribute type, second argument is the value of the passed attribute type.

// // Create text node and append.
// li.appendChild(document.createTextNode('Hello Node'));

// // Create new delete link element for new li item
// const del_link = document.createElement('a');
// del_link.className = 'delete-item secondary-content'; //adding classes 
// del_link.innerHTML = '<i class="fa fa-remove"></i>';

//   //Append del_link to the li item
//   li.appendChild(del_link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);
 










// ------------------------ TRAVERSING THE DOM -------------------
// let val;

// const list = document.querySelector('ul.collection'); //ul with class of collection
// const listItem = document.querySelector('li.collection-item:first-child'); //we only want first li item with collection-item class.

// val = listItem;
// val = list;

// // Get child nodes
// // val = list.childNodes; //this attribute returns a node list of the child nodes of the list. It treats line break in html as text and also include it in the list.
// // val = list.childNodes[0]; //this will be text node.
// // val = list.childNodes[0].nodeType; //there are different types of nodes in Nodelist. It can have line breaks, doctype, attributes etc.


// // Get children elements, not child nodes
// val = list.children //returns HTML Colleciton
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// //Children of children
// list.children[3].children[0].id = 'test-link'; //here we are adding id to the element
// val = list.children[3].children; //it gives us a link as this child has a link in it.

// // First child
// val = list.firstChild; //it gives us the first node. In our case it is text which is actually line break;
// val = list.firstElementChild; //this actually gives the child element, not stuff like text breaks and other fishy stuff

// // Last child
// val = list.lastChild; //child node
// val = list.lastElementChild; // child element

// // Count child elements
// val = list.childElementCount; 

// //Get Parent node
// val = listItem.parentNode;
// //Get Parent Element
// val = listItem.parentElement;

// //Parent of parent
// val = listItem.parentElement.parentElement;

// //Get next sibling
// val = listItem.nextSibling; //node
// val = listItem.nextElementSibling; //element
// val = listItem.nextElementSibling.nextElementSibling; //next to next

// //Get prev sibling
// val = listItem.previousSibling; //node
// val = listItem.previousElementSibling; //it can be null if listItem is first element, otherwise it will give us previous element.


// console.log(val);







// // ----------- Element Selector
// // document.getElementById() 
// /* It selects elements by their id. It can't select by class, tags or other stuff. It is restricted in that area. */

// console.log(document.getElementById('task-title'));

// //Get things from the selected element
// console.log(document.getElementById('task-title').id);

// //Change styling of the elements
// // here we do .style.background, and there we can assign anything we can assign in the css file. And this will change the styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff'; //white
// document.getElementById('task-title').style.padding = '15px';
// //to make something disappear, we will use style.display = 'none'


// //Change content
// document.getElementById('task-title').textContent = 'Task-List';
// document.getElementById('task-title').innerText = 'My Tasks';
// //we can inject inner html maybe when we are using ajax or fetching by fetch api.
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>'

// const taskTitle = document.getElementById('task-title');


//---------Query Selector - only single element selector. If multiple with same specified selector it will only affect the first one. 
//document.querySelector() //newer and more powerful

// console.log(document.querySelector('#task-title')); //for id use #
// console.log(document.querySelector('.card-title')); //for class use . , just like in css.
// console.log(document.querySelector('h5')); //in this case if there are more than one h5 on the page then it is gonna give the first h5 on the page.
 
// document.querySelector('li').style.color = 'red'; //this is a single element selector, so it will only turn first li to red.
// // document.querySelector('ul').style.color = 'red'; 
// document.querySelector('li:last-child').style.color = 'red'; //to select specific element we can also use css pseudo classes. e.g in this case it is last-child
// document.querySelector('li:nth-child(3)').style.color = 'yellow'; //for 3rd one we can use nth-child pseudo class.
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';


// ----------- Multiple Elements Selector

//document.getElementsByClassName
//this will return an HTML collection of all the elements with that specific class name.

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[1]); //we can also treat as an array.

// items[0].style.color = 'blue';
// items[1].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //we can also use getElementsByClassName on an upper level selector like we have done it here.
// console.log(listItems);

// ---------------- document.getElementsByTagName

// const liCollection = document.getElementsByTagName('li'); //it also returns HTML Collection.
// console.log(liCollection);

// liCollection[1].textContent = 'Mia Malkova';

// //now these methods return HTML collections which are not exactly arrays they are lists. We can't use all of our array methods on them. So we can convert them to arrays
// const liArray = Array.from(liCollection);

// console.log(liArray.reverse()); //now it's working,it does not throw an error.

// //now we can also do for each on it.
// liArray.forEach(function(li) {
//   console.log(li.className);
// });

// ---------------- document.querySelectorAll
// querySelectorAll returns NodeList and not an HTML Collection. We can use foreach loop on NodeList directly unlike HTML Collection. And we can still convert Nodelist to array. 

// const liEven = document.querySelectorAll('li:nth-child(even)'); //this will select all the elements with such specifications, where as simple querySelector only selected first one.
// const liOdd = document.querySelectorAll('li:nth-child(odd)');

// //now we'll change the color of the odd and even and it'll affect all of them

// liOdd.forEach(function(li,index){
//   li.style.background = '#ccc';
// });

// liEven.forEach(function(li) {
//   li.style.background = '#f4f4f4';
// });


