var currentDateAndTime = new Date();

function setTodaysDate() {
    //set the date, month, and year into different variables
    let today = currentDateAndTime.getDate();
    let thisMonth = currentDateAndTime.getMonth();
    let thisYear = currentDateAndTime.getFullYear();
    
    //create array with the months of the year
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    
    //will be a string that will format numbers below 10 with 0 before
    var monthResult=0;
    //if the month is below october, add 0 before the month number
    if(thisMonth<9) {
        monthResult = "0"+(thisMonth+1);
    }
    else { //else add add 1 to the month (Oct-Dec)
        monthResult = thisMonth+1;
    }
    //create variable that will set the date using UK format
    var varDate = `${today}/${monthResult}/${thisYear}`;

    /*  Set the h1 to type out the month of the year
        Set the p tag to print out varDate in the UK format
    */
    document.getElementById('todays-date').children[0].innerHTML = months[thisMonth];
    document.getElementById('todays-date').children[1].innerHTML = varDate;
}

function setMonthDates() {
    let dates = "";

    for(i=1; i<32;i++) {
        dates = `<div>${i}</div>`;
        document.getElementById('dates-container').innerHTML = dates;
    }
    
}

setTodaysDate();      
setMonthDates();