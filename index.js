console.log("hello from the script!")

// Append text to a p tag
function showTime(){
  // add time to p tag
  let time = new Date();
  let currentTime = time.getHours() + ":" + time.getMinutes();
  let clockDisplay = document.getElementById("testTime");

  // Time shows in console as a string
  clockDisplay.innerText = currentTime; 
}

// When the page is loaded/refreshed
window.onload = function display () {
  // Everytime you add a new function make sure to call it down here
  showTime();
}
