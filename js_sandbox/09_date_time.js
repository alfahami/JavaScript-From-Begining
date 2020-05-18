let val;

const today = new Date();
let birthday = new Date("05-21-1992");
birthday = new Date("May 21 1992");
birthday = new Date("5/21/1992");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // amount of time passed since january 1 1970

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1994);
birthday.setHours(4);
birthday.setMinutes(30);
birthday.setSeconds(50);

console.log(birthday);
