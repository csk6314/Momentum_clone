const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos =[];
function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos= toDos.filter((toDo) => `li__${toDo.id}` !== li.id);
    saveToDos();
}
function paintToDo(newTodo) {
    const li= document.createElement("li");
    li.id = `li__${newTodo.id}`;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);

    span.innerText = newTodo.text;
    li.appendChild(button);
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    if(toDos.length>=4) {
        alert("4개 까지만 가능합니다!");
        return;
    }
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:toDos.length,
    };
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos!=null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
}