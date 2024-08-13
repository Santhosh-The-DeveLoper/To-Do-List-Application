// Select elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a new task
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add event listener to mark task as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add delete button to the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);

        // Add the new list item to the list
        todoList.appendChild(li);

        // Clear the input field
        todoInput.value = '';
    }
}
