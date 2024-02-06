document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        // Crear un nuevo elemento de tarea
        var taskItem = document.createElement('li');
        taskItem.className = 'taskItem';
        taskItem.innerHTML = `
          <span>${taskInput.value}</span>
          <span class="deleteBtn" onclick="deleteTask(this)">Eliminar</span>
        `;

        // Agregar la tarea a la lista
        taskList.appendChild(taskItem);

        // Limpiar el campo de entrada
        taskInput.value = '';

        // Guardar las tareas en el almacenamiento local
        saveTasks();
    }
}

function deleteTask(deleteBtn) {
    var taskItem = deleteBtn.parentElement;
    taskItem.remove();

    // Guardar las tareas en el almacenamiento local
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById('taskList');
    var tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
}

function loadTasks() {
    var taskList = document.getElementById('taskList');
    var tasks = localStorage.getItem('tasks');

    if (tasks) {
        taskList.innerHTML = tasks;
    }
}