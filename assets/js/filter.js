//sélectionner l'élément du menu déroulant pour le filtre
const filter = document.getElementById('filter');

//cherher toutes les articles qu'on souhaite cacher/afficher
const articleF = document.querySelectorAll('.task');



//ajouter un évenement pour détecter les changements de section
filter.addEventListener('change', () => {
    //récupérer la valeur de l'option sélectionner
    const selectedValue = filter.value;

    articleF.forEach(function(article) {
        const stat = article.querySelector('.status');
        
        switch(selectedValue) {
            case "toDo":
                if(stat.textContent === 'To Do') {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
                break;
            case 'doing':
                if(stat.textContent === 'Doing') {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
                break;
            case 'done':
                if(stat.textContent === 'Done') {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            default:
                break;
        };
    });
});