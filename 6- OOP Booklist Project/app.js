// USING BASIC ES5 Javascript

// BOOK Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//Local Storage Constructor and functions
function Store(){}
Store.prototype.getBooks = function(){
  let books;
  if(localStorage.getItem('books') === null){
    books = [];
  } 
  else{
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
};

Store.prototype.addBooks = function(book){
  const books = new Store().getBooks();
  books.push(book);
  localStorage.setItem('books',JSON.stringify(books));
};

Store.prototype.removeBooks = function(isbn){
  const books = new Store().getBooks();

  books.forEach(function(book,index){
    if(book.isbn === isbn){ 
      books.splice(index, 1); //removing book with the same isbn
    }
  });

  localStorage.setItem('books',JSON.stringify(books));
};

Store.prototype.displayBooks = function(){
  const books = new Store().getBooks();
  if(books !== null){
    const ui = new UI();
    books.forEach(function(book){
      ui.addBookToList(book);
    })
  }
};

// UI Consturctor, most of the stuff will be in prototype that's why constructor is empty.
function UI() {}

UI.prototype.addBookToList = function (book){
  // listUI is actually table-body with the id of book-list
  const listUI = document.getElementById('book-list');
  const row = document.createElement('tr');

  //insert columns to our tr or row.
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td> 
  <td><a href="#" class="delete">X<a></td>
  `;

  listUI.appendChild(row);
}

// Show Error message function 
UI.prototype.showAlert = function(msg, className){
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  // Add text node
  div.appendChild(document.createTextNode(msg));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert Alert before the form
  container.insertBefore(div, form);

  // disappear after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete book function
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    // now target will be a tag, we want to get upto td tag, so we'll use parentElement.parentElement to first get to the td tag then to get to tr tag, we'll delete tr tag that is row  
    // console.log('deleteBook clicked');
    const isbn = target.parentElement.previousElementSibling.textContent;
    //remove
    target.parentElement.parentElement.remove();
    const ui = new UI();
    ui.showAlert('Successfully Deleted!', 'success');
    new Store().removeBooks(isbn);
  }
}

// Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event Listeners
// Show books present in local storage
document.addEventListener('DOMContentLoaded', new Store().displayBooks);

// Add book on submit clicked
document.getElementById('book-form').addEventListener('submit',
function(e){
  //Get form values
  const title =document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate book, once we get all the values above on submit, we create a book object.
  const book = new Book(title,author,isbn);

  // Instantiate UI
  const ui = new UI();

  //Validate
  if(title === '' || author === '' || isbn === ''){
    // Error Alert
    ui.showAlert('Please fill all the fields.', 'error');
  }
  else { 
    // Add book to the ui only when the fiels are not empty.
    ui.addBookToList(book);
    new Store().addBooks(book);
    ui.clearFields();
    ui.showAlert('Book Added!','success');
  }

  // console.log(book);
  e.preventDefault();
});


// Event Listener for delete, we'll use event delegation and use parent's class to reach to the child item which we want to delete. So we'll get element book-list
document.getElementById('book-list').addEventListener('click',
function(e) {
  const ui = new UI();
  if(e.target.className === 'delete'){
    // console.log('Delete button clicked');
  
    // Delete Book
    ui.deleteBook(e.target);
    // ui.showAlert('Successfully Deleted!', 'success');
  }
  // console.log(e.target);
  e.preventDefault();
});




// Delete Book
// const deleteIcon = document.querySelector('delete');
// deleteIcon.addEventListener('click',
//   function(){

// });


