import { remainingDays } from "./remainingDays.js";

let tasks = document.querySelector(".tasks");

//create elements
export function generateHTML(data) {
    const task = document.createElement("article");
    task.classList.add("task");
  
    const name = document.createElement("div");
    name.textContent = data.name;
    task.appendChild(name);
    name.classList.add("name");
  
    const date = document.createElement("div");
    date.textContent = data.date;
    task.appendChild(date);
    date.classList.add("date");
  
    const desc = document.createElement("div");
    desc.textContent = data.description;
    task.appendChild(desc);
    desc.classList.add("description");
  
        const status = document.createElement("div");
        status.textContent = data.pending;
        task.appendChild(status);
        status.classList.add("status");

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
                        article.style.display = "block";
                        break;
                };
            });
        });

    const delItem = document.createElement("button");
    task.appendChild(delItem);
    delItem.classList.add("delItem");

    const delItemImg = document.createElement("img");
    delItemImg.src = "./assets/img/poubelle.png";
    delItem.appendChild(delItemImg);
    delItemImg.classList.add("delItemImg");

    //attacher un gestionnaire d'événement au bouton de supression
    delItem.addEventListener('click', () => {
        //supprimer la div entière
        task.remove();
    });


    const modifyItem = document.createElement("button");
    task.appendChild(modifyItem);
    modifyItem.classList.add("modifyItem");

    const modifyItemImg = document.createElement("img");
    modifyItemImg.src = "./assets/img/crayon-de-couleur.png";
    modifyItem.appendChild(modifyItemImg);
    modifyItemImg.classList.add("modifyItemImg");

    const remainingDays = document.createElement("div");
    task.appendChild(remainingDays);
    remainingDays.classList.add("remainingDays");

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

    let days = document.querySelectorAll(".date");
    
    days.forEach(date => {
        
        if (date.innerText != "" ) {
            date.parentNode.querySelector(".remainingDays").innerText = remainingDays(date.innerText) + " day(s) remaining";
        }
    });

    addToLocalStorage(currentData);
    resetForm();
})