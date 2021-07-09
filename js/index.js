var theTime = new Date();

function getTheDate() {
    let theDate = { 
        'month' : theTime.getMonth(),
        'day' : theTime.getUTCDay(),
        'year' : theTime.getUTCFullYear()
    }
}

theTime.getTheDate();
console.log(theTime);