//fonctionnalité du boutton delete



//ajouter son contenu -> img de poubelle
delItem.textContent= "./assets/img/poubelle.png";

//attacher un gestionnaire d'événements au boutton de suppression
delItem.addEventListener('click', () => {
    //supprimer la div entière
    task.remove();
});
