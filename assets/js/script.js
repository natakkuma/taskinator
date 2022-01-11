
/*Assign Button Element Object Representation*/
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/*Function to create Task Item*/
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };

/*Create & Style New Tas Item*/
buttonEl.addEventListener("click", createTaskHandler);
