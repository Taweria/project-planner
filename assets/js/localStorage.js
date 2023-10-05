import { generateHTML } from "./create.js";

//This function takes an object "task" and add it to the local storage
export function addToLocalStorage(task){
    let tasks = [];    
    if (localStorage.getItem("tasks") !== null) { //If there are already some tasks in the local storage, first retrieve them
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function displayLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let task of tasks){
        generateHTML(task);
    }
}

// export function removeFromLocalStorage(task){
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     tasks.forEach((t,i) => {
//         if ((t.name == task.name)&&(t.date == task.date)&&(t.description==task.description)){
//             tasks.splice(i,1);
//         }
//     })
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }
export function removeFromLocalStorage(task){
    let name = task.querySelector('.name').textContent;
    let date = task.querySelector('.date').textContent;
    let description = task.querySelector('.description').textContent;
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((t,i) => {
        if ((t.name == name)&&(t.date == date)&&(t.description==description)){
            tasks.splice(i,1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//This function takes an object "old" with the old data of a task, and a DOMnode "task" 
//containing the new data.
//The function replaces the old data with the new ones in localStorage
export function replaceInLocalStorage(old, task){
    let newName = task.querySelector('.name').textContent;
    let newDate = task.querySelector('.date').textContent;
    let newDescription = task.querySelector('.description').textContent;
    let newPending = task.querySelector('.status').textContent;
    
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((t,i) => {
        if ((t.name == old.name)&&(t.date == old.date)&&(t.description == old.description)){
            t.name = newName;
            t.date = newDate;
            t.description = newDescription;
            t.pending = newPending;
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Command to clear the local storage:
// localStorage.clear();

//Command to test local storage:
// addToLocalStorage({ name: "CSS", date: "2023-10-04", description: "Write css", pending: "To Do" })