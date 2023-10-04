


//convertir la liste en tableau
const tasksArray = Array.from(remainingDays);



const sortByMapped = (map, compareFn) => (a,b) => compareFn(map(a),map(b));

const byValue= (a,b) => a-b;
const toDate = e => new Date(e).getTime();
const byDate = sortByMapped(toDate, byValue);

console.log([...tasksArray].sort(byDate));