// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");

    // Sample dynamic data (you can replace it with your data)
    const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(listItem);
    });
});
