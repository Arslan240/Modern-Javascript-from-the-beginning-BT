let something = '';
try {
  // Throw your new error
  if(!something){
    throw new SyntaxError('Some thing is not working');
  }

  // Produce reference error
  // myFunc();

  // Produce a TypeError
  // null.myFunction();

  //  Produce a syntax error
  // console.log(eval('2+2')); //we can evaluate javascript
  // console.log(eval(hello)); //we can evaluate javascript
} catch (e) {
  console.log('User error: ' +e.message);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  // it runs regardless of previous errors
  console.log('Finally runs');
}

console.log('Program continues');