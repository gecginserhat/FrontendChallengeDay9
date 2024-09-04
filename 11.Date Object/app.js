let value;

const now = new Date();//its give us present time

const date1 = new Date("3-07-2001 02:00:00");
const date2 = new Date("September 19 1993");

const date3 = new Date("9/19/1993");

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(2000);






value = date1;



console.log(value);