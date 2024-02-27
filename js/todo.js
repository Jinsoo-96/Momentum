const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";
// const setDos = localStorage.getItem("todos");

function saveToTos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const target_li = event.target.parentElement;
    /*  JSON.stringify(toDos)를 몰랐을때.
    const target_tag = toDos.indexOf(target_li.innerText.split("❌")[1]);
    if (target_tag !== -1){
        toDos.splice(target_tag, 1);
    }
    saveToTos(); */
    // toDoList.removeChild(target_li);
    // toDos.splice(toDos.indexOf(target_li.querySelector("span").innerText), 1); 
    // toDos = toDos.filter(item => item.text !== target_li.querySelector("span").innerText
    //                           || item.id !== parseInt(target_li.id));
    toDos = toDos.filter(item => item.id !== parseInt(target_li.id));
    target_li.remove();
    saveToTos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    button.innerText = "❌";
    li.appendChild(button);
    li.appendChild(span);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
    button.addEventListener("click", deleteTodo)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = "   " + toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToTos();
}
/*
JSON.stringify(toDos)를 몰랐을때.
function initTodo(){
    // !=는 값이 다를 때, !==는 값과 타입이 모두 다를 때 사용
    if (setDos !== "") {
        const newSetDos = setDos.split(",");
        for (let i = 0; i < newSetDos.length; i++){
            const toto = newSetDos[i];
            paintTodo(toto);
        }
    }
}
initTodo();
*/

const init_list = JSON.parse(localStorage.getItem(TODOS_KEY));

if (init_list){
    toDos = init_list;
    init_list.forEach(paintTodo);
    /*
    init_list.forEach(element => {
        paintTodo(element);       
    });*/
    /* forEach를 몰랐을때.
    for (let i = 0; i < init_list.length; i++){
        paintTodo(init_list[i]);
    }*/
}


toDoForm.addEventListener("submit", handleToDoSubmit);

