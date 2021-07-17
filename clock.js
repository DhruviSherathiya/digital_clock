function displayTime()
{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let date = today.getDate();
    let day = weekday[today.getDay()];
    let monthname = month[today.getMonth()];
    let year = today.getFullYear();

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    document.getElementById('get-date').innerHTML = hour + " : " + minute + " : " + second;
    document.getElementById('get-day').innerHTML = date + " " + monthname + " , " + year + " " + day;
    setTimeout(displayTime,1000);
}
function checkTime(i)
{
    if(i<10) {i = "0" + i;}
    return i;
}