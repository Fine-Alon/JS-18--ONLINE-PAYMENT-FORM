export function getCurrentMonthNumber() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
  return month.toString(); // Adding leading zero if month is less than 10
}

export function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear().toString().slice(2); // Getting last two digits of the year
}
