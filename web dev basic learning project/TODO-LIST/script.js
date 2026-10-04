let todoList = [ 
    {item: "Buy groceries", date: "2024/06/30"},
    {item: "Finish project", date: "2024/07/05"},
    {item: "Call mom", date: "2024/07/01"}
];
displayItems();
function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement= document.querySelector("#date-input");
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, date: todoDate});
    
    inputElement.value = "";
    dateElement.value = "";
    displayItems();
}
function displayItems() {   
    let containerElement = document.querySelector(".todo-container");   
let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
newHtml+= `<div><span>${todoList[i].item} - ${todoList[i].date}</span>
<button onclick="todoList.splice(${i}, 1); displayItems();">Delete</button></div>`;
    }
    containerElement.innerHTML = newHtml;
}