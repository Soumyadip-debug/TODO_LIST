const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');

function addTask(taskText = taskInput.value) {
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    
    const listItem = document.createElement('li');

    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    completeButton.addEventListener('click', function() {
        taskSpan.style.textDecoration = 'line-through';
        saveData();
    });

    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
        saveData();
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    saveData();
}

addTaskButton.addEventListener('click', () => addTask());

function saveData() {
    localStorage.setItem("tasks", JSON.stringify([...taskList.childNodes].map(item => ({
        taskText: item.querySelector('span').textContent,
        completed: item.querySelector('span').style.textDecoration === 'line-through'
    }))));
}

function showList() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTask(task.taskText);
        if (task.completed) {
            const listItem = taskList.lastChild;
            const taskSpan = listItem.querySelector('span');
            taskSpan.style.textDecoration = 'line-through';
        }
    });
}

showList();
