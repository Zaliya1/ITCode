let saveBtn = document.querySelector('.save-task');
const tasksArr = [];

saveBtn.addEventListener('click', () => {
    addTask();
});
function addTask() { // создание объекта в массиве
    let inputTitle = document.querySelector('.input-title');
    let inputDescription = document.querySelector('.input-description');
    let obj = {
        title: inputTitle.value,
        description: inputDescription.value,
        do: false,
    };
    tasksArr.push(obj);
    inputTitle.value = "";
    inputDescription.value = "";
    renderTasks();
}
function createTask (item, index) { // добавление дел и действия при клике на кнопку "выполнить дело", "удалить дело"
    let completedTasks = document.querySelector('.tasks-completed');
        let tasks = document.querySelector('.tasks');
        let task = document.createElement('div');
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        let timeParagraph = document.createElement('p');
        let buttons = document.createElement('div');

        paragraph.innerHTML = item.title;
        timeParagraph.innerHTML = item.description;
        paragraph.classList.add('title');
        timeParagraph.classList.add('description');

        div.append(paragraph);
        div.append(timeParagraph);
        task.classList.add('task');
        task.append(div);
        buttons.classList.add('buttons');
        
        if (item.do) {
            buttons.innerHTML = '<button class="button-remove"></button><button class="button-uncompleted"></button>';
            task.append(buttons);
            completedTasks.append(task);
        } else {
            buttons.innerHTML = '<button class="button-remove"></button><button class="button-completed"></button>';
            task.append(buttons);
            tasks.append(task);
        }
        
        task.querySelectorAll('.button-completed').forEach(item => {
            item.addEventListener('click', function(){
                tasksArr[index]['do'] = true;
                renderTasks();
            });
        });
        task.querySelectorAll('.button-uncompleted').forEach(item => {
            item.addEventListener('click', function(){
                tasksArr[index]['do'] = false;
                renderTasks();
            });
        });
        task.querySelectorAll('.button-remove').forEach(item => {
            item.addEventListener('click', function(){
                delete tasksArr[index];
                renderTasks();
            });
        });
}
function renderTasks () { //удаление ранее добавленных дел и вызоз функции createTask для добавления обновленных дел 
    document.querySelectorAll('.task').forEach(item => {
        item.remove();
    });
    tasksArr.forEach(createTask);
};
