
const daysEl=document.getElementById("days")
const hoursEl=document.getElementById("hours")
const minsEl=document.getElementById("mins")
const secsEl=document.getElementById("secs")
const dateEl=document.getElementById("date")
const currentTimee=document.getElementById("current_time")
const newYears="1 Jan 2021";

function countdown1()
{
    const today=new Date();

    const dd=formatDate(today.getDate());
    console.log("Date is : "+dd);
    const mm=formatMonth(today.getMonth()+1);
    const yyyy=today.getFullYear();

     const todayDate=dd + '/'+ mm +'/' +yyyy;

    dateEl.innerHTML=todayDate;

    function formatDate(datee)
    {
        return datee < 10 ? (`0${datee}`):datee;
    }

    function formatMonth(month)
    {
        return month < 10 ? (`0${month}`):month;
    }

}

function countdownCurrentTime()
{
    const currentDate=new Date();

    const currentHours=formatHours(currentDate.getHours());
    const currentMins=formatMins(currentDate.getMinutes());
    const currentSecs=formatSecs(currentDate.getSeconds());

    const currentTime=currentHours + ':'+ currentMins+':'+currentSecs;
   
    currentTimee.innerHTML=currentTime;



    function formatHours(hours)
    {
        return hours < 10 ? (`0${hours}`):hours;
    }

    function formatMins(mins)
    {
        return mins < 10 ? (`0${mins}`):mins;
    }

    function formatSecs(secs)
    {
        return secs < 10 ? (`0${secs}`):secs;
    }

}



function countdown()
{
    const newYearDate=new Date(newYears);
    const currentDate=new Date();

    const totalseconds=(newYearDate-currentDate)/1000;

    const days=Math.floor(totalseconds/3600/24);

    const hours=Math.floor(totalseconds/3600) % 24;

    const mins=Math.floor(totalseconds/60) %60;

    const secs=Math.floor(totalseconds) %60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secsEl.innerHTML=formatTime(secs);
    

    function formatTime(time)
    {
        return time < 10 ? (`0${time}`):time;
    }

    


    //console.log(days,hours,mins,secs);
}


setInterval(countdown,1000);
setInterval(countdown1,1000);

//countdownCurrentTime();
setInterval(countdownCurrentTime,1000);