
window.onload = function(){
  // this stores the first element with tag name "ol" in the variable todoList
  var todoList = document.getElementsByTagName("ol")[0];
  console.log(todoList);
  // 
  var button = document.getElementsByClassName("button")[0];
  var newTodo = document.getElementById("new-todo");


  button.addEventListener("click", addToList);

  newTodo.addEventListener("keydown", function(e){
    if (e.which === 13) {
      addToList();
    }
  });


  todoList.addEventListener("click", function(e) {
    if (e.target.className === "delete") {
      var listItemToDelete = e.target.parentNode;
      todoList.removeChild(listItemToDelete);
    }
    else if (e.target.className === "check-off") {
      var listItemToCheckOff = e.target.parentNode;
      if (listItemToCheckOff.className === "todo") {
        listItemToCheckOff.className = "done";
        e.target.innerText = "Redo";
      }
      else if (listItemToCheckOff.className === "done") {
        listItemToCheckOff.className = "todo";
        e.target.innerText = "Done";
      }
    }
  });


  function addToList() {
    var todoText = newTodo.value;

    if (todoText !== "") {
      var newItem = document.createElement("li");
      newItem.className = "todo";

      newItem.innerHTML = todoText +
                          " <button class='delete'>Delete</button>" +
                          " <button class='check-off'>Done</button>";

      todoList.appendChild(newItem);
      newTodo.value = "";
    }
  }

};
tod