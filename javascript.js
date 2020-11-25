//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault(event);
    // //todoDIV
    if (todoInput.value.length > 0){
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //todoITEM
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //completeBUTTON
    const completedButton=document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
    // trashBUTTON
    const trashButton=document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    //append todoDIV to ToDoList
    todoList.appendChild(todoDiv);
    //clear toDo input
    todoInput.value="";
    
    //complete function
    // const comBtn=document.getElementsByClassName("complete-btn");
    // const items=document.getElementsByClassName("todo-item");
    // for (let i=0;i<comBtn.length;i++){
    //     comBtn[i].onclick=function(){
    //     items[i].classList.toggle("completed");
    //     }
    // }
    }
}

function deleteCheck(e){
    const item=e.target;

    if (item.classList[0]=== "trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}
