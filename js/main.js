let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');

function setDate() {
  let now = new Date();
  
  let hours = now.getHours();
  let hoursDegrees = Math.round(((hours / 12) * 360) + 90);
  
  let minutes = now.getMinutes();
  let minutesDegrees = Math.round(((minutes / 60) * 360) + 90);
  
  let seconds = now.getSeconds();
  let secondsDegrees = Math.round(((seconds / 60) * 360) + 90);
  
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  console.log(hours + ":" + minutes + ":" + seconds);
}

setInterval(setDate, 1000);