var currentDateAndTime = new Date();

let today = currentDateAndTime.getDate();
let thisMonth = currentDateAndTime.getMonth();
let thisYear = currentDateAndTime.getFullYear();

var varDate = [today+'/'+(thisMonth+1)+'/'+thisYear];

let months = [
    "January":      thisMonth[0],
    "February":     thisMonth[1],
    "March":        thisMonth[2],
    "April":        thisMonth[3],
    "May":          thisMonth[4],
    "June":         thisMonth[5],
    "July":         thisMonth[6],
    "August":       thisMonth[7],
    "September":    thisMonth[8],
    "October":      thisMonth[9],
    "November":     thisMonth[10],
    "December":     thisMonth[11],
];

document.getElementById('todays-date').children[0].innerHTML = months[thisMonth];
document.getElementById('todays-date').children[1].innerHTML = varDate;