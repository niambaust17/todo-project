const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoStatus = document.querySelector('.filter-todo');

todoBtn.addEventListener('click', function (event)
{
    event.preventDefault();

    if (todoInput.value.length != 0)
    {
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
    }
    else
    {
        alert('Give me a task.')
    }
});


todoList.addEventListener('click', function (event)
{
    const item = event.target;

    if (item.className === 'delete-btn')
    {
        item.parentNode.remove();
    }
    if (item.className === 'complete-btn')
    {
        item.parentNode.classList.toggle('complete');
    }
});


todoStatus.addEventListener('click', function (event)
{
    const todoStatus = todoList.childNodes;
    todoStatus.forEach(function (todo)
    {
        switch (event.target.value)
        {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'complete':
                if (todo.classList.contains('complete'))
                {
                    todo.style.display = 'flex';
                }
                else
                {
                    todo.style.display = 'none';
                }
                break;
            case 'incomplete':
                if (!todo.classList.contains('complete'))
                {
                    todo.style.display = 'flex';
                }
                else
                {
                    todo.style.display = 'none';
                }
        }
    });
});
