const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedSpan = document.getElementById("completed-counter");
const uncompletedSpan = document.getElementById("uncompleted-counter");

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#list-container li").forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        const taskText = li.querySelector(".task-text").textContent;
        tasks.push({
            text: taskText,
            completed: checkbox.checked
        });
    });
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem("todoTasks");
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            addTaskFromMemory(task.text, task.completed);
        });
    } else {
        // Default tasks if nothing is saved
        const defaultTasks = ["Post on linkedin", "Edit resume", "Finish data analytics course"];
        defaultTasks.forEach(task => {
            addTaskFromMemory(task, false);
        });
    }
    updateCounters();
}

// Add task from memory (without saving again to avoid loop)
function addTaskFromMemory(task, isCompleted = false) {
    const li = document.createElement("li");
    
    const taskContent = document.createElement("div");
    taskContent.className = "task-content";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    
    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;
    
    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskText);
    
    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);
    
    li.appendChild(taskContent);
    li.appendChild(taskButtons);
    
    if (isCompleted) {
        li.classList.add("completed");
    }
    
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
        updateCounters();
        saveTasks();
    });
    
    editBtn.addEventListener("click", function() {
        const newText = prompt("Edit task:", taskText.textContent);
        if (newText && newText.trim() !== "") {
            taskText.textContent = newText.trim();
            if (checkbox.checked) {
                checkbox.checked = false;
                li.classList.remove("completed");
            }
            updateCounters();
            saveTasks();
        }
    });
    
    deleteBtn.addEventListener("click", function() {
        if (confirm(`Delete "${taskText.textContent}"?`)) {
            li.remove();
            updateCounters();
            saveTasks();
        }
    });
    
    listContainer.appendChild(li);
}

// Add new task (user input)
function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }
    
    addTaskFromMemory(task, false);
    inputBox.value = "";
    updateCounters();
    saveTasks();
}

function updateCounters() {
    const completed = document.querySelectorAll(".completed").length;
    const uncompleted = document.querySelectorAll("li:not(.completed)").length;
    completedSpan.textContent = completed;
    uncompletedSpan.textContent = uncompleted;
}

// Event listeners
document.getElementById("input-button").addEventListener("click", addTask);
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

// Load saved tasks when page opens
loadTasks();