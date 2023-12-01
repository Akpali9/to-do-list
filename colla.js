// Mock data for initial tasks
const initialTasks = ['Task 1', 'Task 2', 'Task 3'];

// Function to load tasks
function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    initialTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task;
        taskList.appendChild(taskElement);
    });
}

// Load tasks when the page loads
window.onload = function () {
    loadTasks();
};

// Handle form submission
document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const newTask = taskInput.value;
    initialTasks.push(newTask);
    loadTasks();
    taskInput.value = '';
});
