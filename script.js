// Run code only after the page has fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {

        // Get and trim input value
        const taskText = taskInput.value.trim();

        // If empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task on click
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button and li to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add button click event
    addButton.addEventListener('click', addTask);

    // Add task when pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call addTask on DOM load (as required)
    addTask();
});
