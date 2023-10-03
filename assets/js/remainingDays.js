//This function gets a date, and returns the remains days until this date
function remainingDays(date) {
    return Math.floor(((date.getTime()-(new Date).getTime())/(1000*60*60*24)) + 1);
}
// console.log(remainingDays(new Date('2023-10-10')));