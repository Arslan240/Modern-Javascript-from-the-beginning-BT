// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners function
function loadEventListeners(){
  // DOM Load event, 'DOMContentLoaded' is event type which is triggered once the dom is loaded
  document.addEventListener('DOMContentLoaded', getTasks);  
  //Add submit event to the form and add task to the list and ul
  form.addEventListener('submit', addTask);

  //now add listener to remove task from the list, we'll use event delegation to apply listener to all the lis of ul
  taskList.addEventListener('click',removeTask);

  //Add event listener to the clear Tasks button
  clearBtn.addEventListener('click', clearTasks);

  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//submit function for form event
function addTask(e){
  //check for value
  
  if(taskInput.value === ''){
    alert('Add a task');
  }
  else { // if some task is entered then we create a new li item and then add it to the ul

    // Create li item
    const li = document.createElement('li');
    // Add className to li, in materialize li should have class of collection-item
    li.className = 'collection-item';
    // Create Text node and append it to li
    const textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode); //hopefully will add 
    
    //create link tag
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'; //secondary-content is for right aligning stuff in li
    link.innerHTML = '<i class="fa fa-times"></i>';
    
    //append link to the li
    li.appendChild(link);

    // Append li to the ul
    taskList.appendChild(li);

    // Add task to the local storage, we pass the value that was entered
    storeTaskInLocalStorage(taskInput.value); 

    console.log(li);
    taskInput.value = '';
  }

  
  e.preventDefault(); //we prevent to submit the form which is default of html
}


// Remove Task
function removeTask(e){
  
  // because listener is added to ul, so we use if condition to apply it to the cross icon's parent, when we click on icon the target will be icon, but we want the a tag so we can use parent attribute on the i tag
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete-item clicked');
    console.log(e.target); //because icon is clicked, so target contains i tag

    //actual removing
    if(confirm('Are you sure about that?')){
      e.target.parentElement.parentElement.remove();

      //remove from local storage, passing the actual li item to the function
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }

  e.preventDefault();
}

//Remove task from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(
    function(task, index){
      if(taskItem.textContent === task){ // textContent is actual text
        tasks.splice(index, 1); //if they are equal we want to delete that, idk why 1 is put there
      }
  });

  localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Clear Tasks
function clearTasks(e){
   
  //slower way
  taskList.innerHTML = '';

  //faster way
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // localStorage.clear(); //it'll clear the whole local storage, but we only want to clear tasks item
  localStorage.removeItem('tasks');
  e.preventDefault();
}

// FIlter tasks
function filterTasks(e){
  
  const to_be_searched = e.target.value.toLowerCase(); //we keep track of everything that is actively typed in the text field.

  //we get all the tasks in the form of node list using queryselectorAll and apply foreach loop on ti to filter
  let taskList2 = document.querySelectorAll('.collection-item');

  taskList2.forEach(
    function(task){
      const item = task.firstChild.textContent;
      
      // indexOf() searches if the text passed is present or not, if it's present returns 1 if not then -1
      if(item.toLowerCase().indexOf(to_be_searched) != -1){
        task.style.display = 'block'; //if the text entered in the filter matches some of the tasks all the tasks' display is set to block, otherwise none which will disappear them from the list.
      }
      else{
        task.style.display = 'none';
      }
      console.log(task.firstChild);
      
  });

  e.preventDefault();
}


function storeTaskInLocalStorage(task){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  //set back the array to local storage
  localStorage.setItem('tasks',JSON.stringify(tasks));
}


// Get Tasks
function getTasks(e){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li item
    const li = document.createElement('li');
    // Add className to li, in materialize li should have class of collection-item
    li.className = 'collection-item';
    // Create Text node and append it to li
    const textNode = document.createTextNode(task);
    li.appendChild(textNode); //hopefully will add 
    
    //create link tag
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'; //secondary-content is for right aligning stuff in li
    link.innerHTML = '<i class="fa fa-times"></i>';
    
    //append link to the li
    li.appendChild(link);

    // Append li to the ul
    taskList.appendChild(li);
  })
}