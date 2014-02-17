/*
 * lep_main.js implements the logic for a basic todo list application
 * The live site is available at http://cloudchill.in/s/leprechaun_list_2/index.html
 *
 */

// Defines window.onload as the following function (which is *anonymous*).
window.onload = function(){

  // Assigns the 0th (or first) element with tag name "ol" to the variable todoList.
  var todoList = document.getElementsByTagName("ol")[0];

  // Assigns the 0th (or first) element with class name "button" to the variable button.
  var button = document.getElementsByClassName("button")[0];

  // Assigns the element with ID "new-todo" to the variable newTodo.
  var newTodo = document.getElementById("new-todo");

  // var body = document.getElementsByTagName("body")[0];

  // body.addEventListener("click", function(e) {
  //   console.log(e.target);
  // });

  // Sets an click event listener -- when button (the variable!) is clicked, the function addToList is run.
  button.addEventListener("click", addToList);

  // Sets a keydown (keyboard key down) to the variable newTodo, to run an anonymous function.
  newTodo.addEventListener("keydown", function(e) {
    // When an event handler 'fires', it calls it's callback function with one parameter, the *event object*.
    // The event object contains information about the event, like which element was acted upon,
    // which key was pressed (if one was pressed), and allows the programmer to cancel the event
    // e.which is the code for the key which was pressed.
    if (e.which === 13) { // 13 is the key code for 'enter'

      // If enter was pressed, run addToList
      addToList();
    }
  });

  // Add a click event listener to the variable todoList, again with an anonymous function
  todoList.addEventListener("click", function(e) {
    console.log(e.target);
    // If the event's target -- the actual item that was clicked -- had a class name delete
    if (e.target.className === "delete") {

      // Create a variable listItemToDelete, and set it to the clicked item's parent
      var listItemToDelete = e.target.parentNode;

      // Remove that element
      todoList.removeChild(listItemToDelete);
    }
    else if (e.target.className === "check-off") {

      // In the case that the event's target didn't have class name delete AND it has class name "check-off"
      var listItemToCheckOff = e.target.parentNode;

      // If the todo is not yet done, make it done.
      if (listItemToCheckOff.className === "todo") {
        listItemToCheckOff.className = "done";
        e.target.innerText = "Redo";
      }
      // If the todo is done, undo it.
      else if (listItemToCheckOff.className === "done") {
        listItemToCheckOff.className = "todo";
        e.target.innerText = "Done";
      }
    }
  });

  /*
   * addToList adds a todo based on the text in the
   * value in the "newTodo" input box.
   */
  function addToList() {

    // grab the value in the newTodo input box
    var todoText = newTodo.value;

    // make sure the todo is not the empty string
    if (todoText !== "") {

      // create a list item to add.
      var newItem = document.createElement("li");

      // give our list item the "todo" class.
      newItem.className = "todo";

      // give our list item the right text and add options to delete and check off.
      newItem.innerHTML = todoText +
                          " <button class='delete'>Delete</button>" +
                          " <button class='check-off'>Done</button>";

      // Add our list item to the todo list in the DOM. (This makes it appear!)
      // Note: DOM stands for *Document Object Model*. This is how we refer to the HTML structure,
      // that is the collection of nodes (and their children) that make up the HTML document
      todoList.appendChild(newItem);

      // Erase the text in the input box.
      newTodo.value = "";
    }
  }
};

/*
  Question 0: Around line 37, we assign an event listener to todoList,
  and then check if the element that was clicked has
  'delete'. Why don't we just add an event listener to all
  the elements with class name 'delete' in the first place? i.e.

  var deleteButtons = document.getElementsByClassName("delete");

  deleteButtons.addEventListener("click", function(e) {
    var listItemToDelete = e.target.parentNode;
    todoList.removeChild(listItemToDelete);
  });

  Question 1: What is the 'e' that we have in some of our anonymous functions?
  Where does it come from? Who/what defines it?

  Question 2: What is the window.onload function? What is window?

  Question 3: What is document?

*/
