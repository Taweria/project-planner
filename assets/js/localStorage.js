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

export function removeFromLocalStorage(task){
    

}

function deleteItem() {
    localStorage.removeItem("task");
}


//Command to clear the local storage:
// localStorage.clear();

//Command to test local storage:
// addToLocalStorage({ name: "CSS", date: "2023-10-04", description: "Write css", pending: "To Do" })