var currentDateAndTime = new Date();

let today = currentDateAndTime.getDate();
let thisMonth = currentDateAndTime.getMonth();
let thisYear = currentDateAndTime.getFullYear();
var varDate = [today+'/'+thisMonth+'/'+thisYear];

let todaysDate = currentDateAndTime.getTodaysDate();

document.getElementById('todays-date').innerHTML = todaysDate;