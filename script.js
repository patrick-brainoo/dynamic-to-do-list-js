// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // prevent empty tasks

    // Create new <li>
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add class for styling (this is where classList.add is required)
    li.classList.add("task-item");

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input after adding
}

// Event listener for Add button
addButton.addEventListener("click", addTask);

// Event listener for Enter key
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

