const addTask = document.getElementById('add')
const taskList = document.getElementById('task-list')
const filter = document.getElementById('filter')

let counter = 0

addTask.addEventListener('click', () => {
    const task = document.getElementById('task')
    let taskItem = document.createElement('div')
    taskItem.className = 'taskItem'
    taskItem.id = counter
    let done = document.createElement('input')
    done.type = 'checkbox'
    done.name = 'done'
    done.id = 'done'
    done.addEventListener('change', () => {
        if(done.checked) {
            let del = document.createElement('button')
            del.id = 'delete'
            del.innerHTML = 'X'
            del.addEventListener('click', () => {
                taskItem.remove()
            })
            taskText.appendChild(del)
        } else {
            let del = document.getElementById('delete')
            if (del) {
                del.remove()
            }
        }
        taskText.classList.toggle('green', done.checked)
    })
    let taskText = document.createElement('nav')
    taskText.id = 'taskText'
    taskText.innerHTML = task.value
    taskItem.appendChild(done)
    taskItem.appendChild(taskText)
    task.value = ""
    counter += 1
    taskList.appendChild(taskItem)
})

filter.addEventListener('keyup', () => {
    const filterValue = filter.value.toLowerCase();
    const tasks = document.querySelectorAll('.taskItem');

    tasks.forEach(task => {
        const taskText = task.querySelector('#taskText').innerHTML.toLowerCase();
        if (taskText.includes(filterValue)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
});
