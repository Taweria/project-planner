import { generateHTML } from "./create.js";

function displayLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let task of tasks){
        generateHTML(task);
    }
}
displayLocalStorage();