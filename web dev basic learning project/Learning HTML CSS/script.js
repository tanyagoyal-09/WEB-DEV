const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let task =[]

addTaskButton.addEventListener("click", function() {
    const taskText =  todoInput.value.trim()
    if(taskText ==="") return;
    const newTask={
        id: Date.now(),
        text: taskText,
        completed: false
    }
    task.push(newTask)

    todoInput.value ="" // Clear input field
    console.log(task);
});
