import { remainingDays } from "./remainingDays";

//récupérer toutes les articles qu'on souhaite trier
const articleF = document.querySelectorAll('.task');

const remainingDays = document.querySelectorAll('.remainingDays');
//convertir la liste en tableau
const tasksArray = Array.from(remainingDays);



const sortByMapped = (map, compareFn) => (a,b) => compareFn(map(a),map(b));

const byValue= (a,b) => a-b;
const toDate = e => new Date(e).getTime();   //voir comment aller chercher l'article date et pas l'élément
const byDate = sortByMapped(toDate, byValue);

console.log([...tasksArray].sort(byDate));