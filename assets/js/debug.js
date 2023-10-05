


modifyItem.addEventListener("click", ()=>{
    let old = {};
    // name
    old.name = task.querySelector(".name").textContent;
    task.querySelector(".name").contentEditable = "true";
    task.querySelector(".name").style.border = "1px solid black";
    
    // description
    old.description = task.querySelector(".description").textContent;
    task.querySelector(".description").contentEditable = "true";
    task.querySelector(".description").style.border = "1px solid black";
    
    // date
    old.date = task.querySelector(".date").textContent;
    task.querySelector(".date").contentEditable = "true";
    task.querySelector(".date").style.border = "1px solid black";
    // task.querySelector(".date").outerHTML = "<input type='date'>";
    
    //status
    old.status = task.querySelector(".status").textContent;
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

            replaceInLocalStorage(old, task);
        }
        leftDays.textContent = remainingDays(date.textContent);
    })
    
})