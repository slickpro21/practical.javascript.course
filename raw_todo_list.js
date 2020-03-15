// declare varible and assign it to an Array.
let todos = ['wash dishes', 'walk dog', 'empty trash']

// create a function to display todo list to the screen.
function displayToDos(){
  console.log('My ToDos: ', todos);
}

// create a function to add to our todo list and then display the updated list to the screen.
function addToDos(todo){
  todos.push(todo);
  displayToDos();
}

// create a function to change an item in our todo list and then display the updated list to the screen.
function changeToDos(position, newValue){
  todos[position] = newValue;
  displayToDos();
}

// create a function to delete an item in our todo list and then display the updated list to the screen.
function deleteToDos(position){
  todos.splice(position, 1);
  displayToDos();
}

// call displayToDos function and run it.
displayToDos();

// call deleteToDos function and run it.
deleteToDos(1);

// call addToDos function and run it.
addToDos('take a shower');

// call changeToDos function and run it.
changeToDos(0, 'clean fish bowl');
