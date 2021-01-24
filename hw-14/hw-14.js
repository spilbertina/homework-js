let todoStorage = [
    {
        task: 'Task 1',
        user: 'User1'
    },
    {
        task: 'Task 2',
        user: 'User1'
    },
    {
        task: 'Task 3',
        user: 'User1'
    },
    {
        task: 'Task 4',
        user: 'User2'
    },
]
 
function getAllTasksString(todos) {
    return todos.reduce((join, str) => `${join}${str.task} `, '')
}
 
function getTaskByAuthor(todos, userName) {
    return todos.filter((i) => i.user == userName);
}
 
function getTaskByWord(todos, word) {
    return todos.filter((i) => {
        return i.task.toUpperCase().indexOf(word.toUpperCase()) >= 0
    });
}
 
function addTask(todo, userName, taskName) {
    const newTask = {      
        task: taskName,
        user: userName
    }
 
    todo.push(newTask)
}
 
function removeTask(todo, index) {
    todo.splice(index, 1)
}
 
addTask(todoStorage, 'User 3', 'New task');
removeTask(todoStorage, 0);
console.log('author', getTaskByAuthor(todoStorage, 'User2'));
console.log('word', getTaskByWord(todoStorage, 'task'));
console.log(getAllTasksString(todoStorage));