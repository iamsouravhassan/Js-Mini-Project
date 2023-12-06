
// Time Function

// Select Html Element

function time (){
let hourC = document.querySelector('.hour');
let minuteC = document.querySelector('.minute');
let secondC= document.querySelector('.second');

// Call Date Mathod

  let date = new Date();
  let hour = date.getHours();
  let second = date.getSeconds();
  let minute = date.getMinutes();
  
  // Readable Time Create
  
  hour>12 ? hour = hour -12: hour= hour;
  hour === 0 ? hour = 12:hour = hour;
  hour<10 ? hour = `0${hour}`:hour;
  minute<10 ? minute = `0${minute}`:minute;
  second<10 ? second = `0${second}`:second;
   
  // Replace Html to Time
   
  hourC.innerHTML=hour;
  minuteC.innerHTML = minute;
  secondC.innerHTML = second;
}

// Date Function

// Select Html Element

function date(){
    let dayC = document.querySelector('.day');
    let monthC = document.querySelector('.month');
    let yearC = document.querySelector('.year');
    let weekC = document.querySelector('.week');

        // Call Date Mathod

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let week = date.getDay();

    // Create Arr for week and month

    const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'] 
    const weekArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    // Replace Html Element 

    dayC.innerHTML = day;
    monthC.innerHTML = monthArr[month];
    yearC.innerHTML = year;
    weekC.innerHTML = weekArr[week];

}

// Call function on page load

date()
time();

// Set real time refresh

setInterval(time,1000)
