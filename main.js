document.addEventListener('DOMContentLoaded', function () {
    const newTaskForm = document.getElementById('new-task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const tasksContainer = document.getElementById('tasks');

    newTaskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(text) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <div class="content">
                <input type="text" class="text" value="${text}" readonly>
            </div>
            <div class="action">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        tasksContainer.appendChild(taskElement);
    }

    tasksContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            e.target.closest('.task').remove();
        } else if (e.target.classList.contains('edit')) {
            const textInput = e.target.closest('.task').querySelector('.text');
            textInput.removeAttribute('readonly');
            textInput.focus();
        }
    });

    tasksContainer.addEventListener('focusout', function (e) {
        if (e.target.classList.contains('text')) {
            e.target.setAttribute('readonly', true);
        }
    });
});
