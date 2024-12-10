
const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');


function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    
    const listItem = document.createElement('li');

    // Create a span to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    completeButton.addEventListener('click', function() {
        taskSpan.style.textDecoration = 'line-through';
    });

    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });


    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);


    taskList.appendChild(listItem);

    
    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);



