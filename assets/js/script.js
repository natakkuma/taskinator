
/*Assign Button Element Object Representation*/
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/*Function to create Task Item*/
var createTaskHandler = function(event) {

    event.preventDefault();
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);

};

/*Create & Style New Tas Item*/
formEl.addEventListener("submit", createTaskHandler);
