// class Book {
//   constructor (title, author, isbn){
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// class UI{
//   addBookToList(book){
//     // listUI is actually table-body with the id of book-list
//     const listUI = document.getElementById('book-list');
//     const row = document.createElement('tr');

//     //insert columns to our tr or row.
//     row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td> 
//     <td><a href="#" class="delete">X<a></td>
//     `;

//     listUI.appendChild(row);
//   }

//   showAlert(msg, className){
//       const div = document.createElement('div');
//       div.className = `alert ${className}`;
//       // Add text node
//       div.appendChild(document.createTextNode(msg));
//       // Get parent
//       const container = document.querySelector('.container');
//       const form = document.querySelector('#book-form');
//       // Insert Alert before the form
//       container.insertBefore(div, form);
    
//       // disappear after 3 sec
//       setTimeout(function(){
//         document.querySelector('.alert').remove();
//       }, 3000);
//   }

//   deleteBook(target){
//       if(target.className === 'delete'){
//         // now target will be a tag, we want to get upto td tag, so we'll use parentElement.parentElement to first get to the td tag then to get to tr tag, we'll delete tr tag that is row  
//         // console.log('deleteBook clicked');
//         //remove
//         target.parentElement.parentElement.remove();
//         const ui = new UI();
//         ui.showAlert('Successfully Deleted!', 'success');
//       }
//   }

//   clearFields(){
//       document.getElementById('title').value = '';
//       document.getElementById('author').value = '';
//       document.getElementById('isbn').value = '';  
//   }
// }

// // Local Storage class
// class Store{
//   static getBooks(){
//     let books;
//     if(localStorage.getItem('books') === null){
//       books = [];
//     }else {
//       books = JSON.parse(localStorage.getItem('books')); 
//     }

//     return books;
//   }

//   static displayBooks(){
//     const books = Store.getBooks();
//     books.forEach(function(book){
//       const ui = new UI();
//       ui.addBookToList(book);
//     });
//   }

//   static addBook(book){
//     const books = Store.getBooks();
//     books.push(book);
//     localStorage.setItem('books',JSON.stringify(books));
//   }

//   static removeBook(isbn){
//     const books = Store.getBooks();
//     books.forEach(function(book, index){ //in forEach loop the second parameter is index of the particular element from the array. So by using 
//       if(book.isbn === isbn){
//         let startingIndex = index;
//         books.splice(startingIndex, 1); //first argument is the starting index where the function will start removing, and the second 1 means remove 1 element from the starting index.
//       }
//     });

//     localStorage.setItem('books',JSON.stringify(books));
//   }
// }

// // Event Listeners
// // Add book Event on submit
// document.getElementById('book-form').addEventListener('submit',
// function(e){
//   //Get form values
//   const title =document.getElementById('title').value,
//         author = document.getElementById('author').value,
//         isbn = document.getElementById('isbn').value;

//   // Instantiate book, once we get all the values above on submit, we create a book object.
//   const book = new Book(title,author,isbn);

//   // Instantiate UI
//   const ui = new UI();

//   //Validate
//   if(title === '' || author === '' || isbn === ''){
//     // Error Alert
//     ui.showAlert('Please fill all the fields.', 'error');
//   }
//   else { 
//     // Add book to the ui only when the fiels are not empty.
//     ui.addBookToList(book);
//     ui.clearFields();
//     // Add book to local storage
//     Store.addBook(book);
//     ui.showAlert('Book Added!','success');
//   }

//   // console.log(book);
//   e.preventDefault();
// });

// // We need to call the methods on DOM load event to show all the present books in the local storage
// document.addEventListener('DOMContentLoaded', Store.displayBooks);


// // Event Listener for delete, we'll use event delegation and use parent's class to reach to the child item which we want to delete. So we'll get element book-list
// document.getElementById('book-list').addEventListener('click',
// function(e) {
//   const ui = new UI();
//   if(e.target.className === 'delete'){
//     // console.log('Delete button clicked');
  
//     // Delete Book
//     ui.deleteBook(e.target);
    
//     // Remove from local storage. Here we pass in the isbn number of the book deleted so that we can delete corresponding element from array of fetched books from local storage.
//     const isbn = e.target.parentElement.previousElementSibling.textContent;
//     Store.removeBook(isbn);
//   }
//   // console.log(e.target);
//   e.preventDefault();
// });