//This function gets a date, and returns the remains days until this date
export function remainingDays(dateStr) {
    let date = new Date(dateStr)
    return Math.floor(((date.getTime()-(new Date).getTime())/(1000*60*60*24)) + 1);
}
// console.log(remainingDays('2023-10-10'));