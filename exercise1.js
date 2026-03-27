const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Load from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.innerHTML = task.text;

    if (task.completed) {
      text.classList.add("completed");
    }

    // Buttons container
    const btns = document.createElement("div");
    btns.classList.add("buttons");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔";
    completeBtn.classList.add("complete");
    completeBtn.onclick = () => toggleTask(task.id);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => deleteTask(task.id);

    btns.appendChild(completeBtn);
    btns.appendChild(deleteBtn);

    li.appendChild(text);
    li.appendChild(btns);

    list.appendChild(li);
  });
}

// Add task
function addTask() {
  const value = input.value.trim();

  if (value === "") {
    alert("Enter a task!");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: value,
    completed: false
  };

  tasks.push(newTask);
  saveData();
  renderTasks();

  input.value = "";
}

// Toggle complete
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  saveData();
  renderTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveData();
  renderTasks();
}

// Save to localStorage
function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Events
addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial load
renderTasks();