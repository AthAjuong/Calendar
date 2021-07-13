var currentDateAndTime = new Date();

let today = currentDateAndTime.getDate();
let thisMonth = currentDateAndTime.getMonth();
let thisYear = currentDateAndTime.getFullYear();

var varDate = [today+'/'+(thisMonth+1)+'/'+thisYear];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.getElementById('todays-date').children[0].innerHTML = months[thisMonth];
document.getElementById('todays-date').children[1].innerHTML = varDate;