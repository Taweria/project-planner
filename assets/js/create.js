import { remainingDays } from "./remainingDays.js";
import { addToLocalStorage } from "./localStorage.js";
import { removeFromLocalStorage } from "./localStorage.js";

let tasks = document.querySelector(".tasks");


//create elements
export function generateHTML(data) {
    const task = document.createElement("article");
    task.classList.add("task","w-96", "flex", "flex-col", "bg-white", "relative", "rounded-md", "shadow-md");

    const status = document.createElement("div");
    status.textContent = data.pending;
    task.appendChild(status);
    status.classList.add("status", "w-12", "bg-darkPink", "text-center", "font-bold", "rounded-tl-lg", "text-lightPink");

    const modifyItem = document.createElement("button");
    task.appendChild(modifyItem);
    modifyItem.classList.add("modifyItem");

    const modifyItemImg = document.createElement("img");
    modifyItemImg.src = "./assets/img/crayon-de-couleur.png";
    modifyItem.appendChild(modifyItemImg);
    modifyItemImg.classList.add("modifyItemImg", "w-6", "absolute", "top-0.5", "right-8");

    const delItem = document.createElement("button");
    task.appendChild(delItem);
    delItem.classList.add("delItem");

    const delItemImg = document.createElement("img");
    delItemImg.src = "./assets/img/poubelle.png";
    delItem.appendChild(delItemImg);
    delItemImg.classList.add("delItemImg", "w-6", "absolute", "top-0.5", "right-0");

    //attacher un gestionnaire d'événement au bouton de supression
    delItem.addEventListener('click', () => {
        //supprimer la div entière
        removeFromLocalStorage(data);
        task.remove();
    });

  
    const name = document.createElement("div");
    name.textContent = data.name;
    task.appendChild(name);
    name.classList.add("name", "my-5", "mx-2", "font-fonttitle");

    const desc = document.createElement("div");
    desc.textContent = data.description;
    task.appendChild(desc);
    desc.classList.add("description", "mx-2");
  
    const date = document.createElement("div");
    date.textContent = data.date;
    task.appendChild(date);
    date.classList.add("date", "my-3", "mx-2");
  
    
  
        

        //sélectionner l'élément du menu déroulant pour le filtre
        const filter = document.getElementById('filter');

        //ajouter un évenement pour détecter les changements de section
        filter.addEventListener('change', () => {
            //récupérer la valeur de l'option sélectionner
            const selectedValue = filter.value;
            //cherher toutes les articles qu'on souhaite cacher/afficher
            const articleF = document.querySelectorAll('.task');

            articleF.forEach(function(article) {
                const stat = article.querySelector('.status');
                  
                switch(selectedValue) {
                    case "toDo":
                        if(stat.innerText === 'To do') {
                            article.style.display = 'block';
                        } else {
                            article.style.display = 'none';
                        }
                        break;
                    case 'doing':
                        if(stat.innerText === 'Doing') {
                            article.style.display = 'block';
                        } else {
                            article.style.display = 'none';
                        }
                        break;
                    case 'done':
                        if(stat.innerText === 'Done') {
                            article.style.display = 'block';
                        } else {
                            article.style.display = 'none';
                        }
                        break;
                    default:
                        break;
                };
            });
        });


    

    


    // allow user to modify cards
    modifyItem.addEventListener("click", ()=>{
        // name
        task.querySelector(".name").contentEditable = "true";
        task.querySelector(".name").style.border = "1px solid black";
        
        // description
        task.querySelector(".description").contentEditable = "true";
        task.querySelector(".description").style.border = "1px solid black";
        

        // date
        task.querySelector(".date").contentEditable = "true";
        task.querySelector(".date").style.border = "1px solid black";
        // task.querySelector(".date").outerHTML = "<input type='date'>";
        
        //status
        task.querySelector(".status").contentEditable = "true";
        task.querySelector(".status").style.border = "1px solid black";

        task.addEventListener("keydown", (event)=>{
            if (event.key.toLowerCase() === "enter") {
                task.querySelector(".name").contentEditable = "false";
                task.querySelector(".description").contentEditable = "false";
                task.querySelector(".date").contentEditable = "false";
                task.querySelector(".status").contentEditable = "false";

                task.querySelector(".name").style.border = "";
                task.querySelector(".description").style.border = "";
                task.querySelector(".date").style.border = "";
                task.querySelector(".status").style.border = "";
            }
            leftDays.textContent = remainingDays(date.textContent);
        })
        
    })

    
    const sort = document.getElementById('sort');
    sort.addEventListener('change', function () {
        const selectedSort = sort.value;
        const allTasks = document.querySelectorAll('.task');
        let sortedTasks= Array.from(allTasks).sort(function(a,b) {
            let valueA, valueB;
            if(selectedSort === 'urgent') {
                valueA = a.querySelector(".date").innerText;
                valueB = b.querySelector(".date").innerText;
            } else if (selectedSort ==='nom') {
                valueA = a.querySelector(".name").textContent;
                valueB = b.querySelector(".name").textContent;
            }
            return valueA.localeCompare(valueB)
        });
        const tasks = document.querySelector(".tasks");
        tasks.innerHTML= "";
        sortedTasks.forEach(function (element) {
            tasks.appendChild(element);
        });
    });

    

    const leftDays = document.createElement("div");
    leftDays.textContent = remainingDays(data.date);
    task.appendChild(leftDays);
    leftDays.classList.add("remainingDays", "absolute", "bottom-0", "right-0", "bg-darkPink", "px-2", "rounded", "text-lightPink");

    tasks.appendChild(task);
    
}




// reset form after push add
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("pending").value = "none";
}

const form = document.getElementById("form")

let currentData = {};

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    for (const value of formData.entries()) {
        currentData[value[0]] = value[1]
    }

    generateHTML(currentData);
    addToLocalStorage(currentData);
    resetForm();
});