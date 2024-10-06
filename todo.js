// Function to add a task to the "Pending Tasks" list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskText} <button onclick="markComplete(this)">Complete</button>`;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Function to mark a task as complete
function markComplete(button) {
    const taskItem = button.parentElement;
    const completedTaskList = document.getElementById('completedTaskList');

    taskItem.classList.add('completed');
    taskItem.removeChild(button); // Remove the "Complete" button from the completed task
    completedTaskList.appendChild(taskItem);
}
