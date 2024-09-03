const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();

const day = date.getDay();
console.log("Today is :", day);

let hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const timeZone = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;
console.log("Current time is :", hour, timeZone, ":", minute, ":", second);
