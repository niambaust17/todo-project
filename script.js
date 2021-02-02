const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', function (event)
{
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value;
    todoItem.className = 'todo-item';
    todoDiv.appendChild(todoItem);

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.className = 'complete-btn';
    todoDiv.appendChild(completeBtn);

    const DeleteBtn = document.createElement('button');
    DeleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    DeleteBtn.className = 'delete-btn';
    todoDiv.appendChild(DeleteBtn);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
});
