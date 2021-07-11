var currentDateAndTime = new Date();
console.log(theTime);

function getTodaysDate(currentDateAndTime) {
    let today = currentDateAndTime.getDate();
    let thisMonth = currentDateAndTime.getMonth();
    let thisYear = currentDateAndTime.getFullYear();

    var varDate = [today+'/'+thisMonth+'/'+thisYear];
    return varDate;
}

let todaysDate = currentDateAndTime.getTodaysDate();

document.getElementById('todays-date').children[1].innerHTML = todaysDate;