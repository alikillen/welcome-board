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

function getBackgroundImage() {
  fetch('https://api.unsplash.com/photos/random')
  .then(function(data) {
    console.log(data)
  // Here you get the data to modify as you please
      // document.body.style.backgroundImage = data;
      // getting a 401 error - no API key
    })  

  .catch(function(error) {
    console.log(error)
  // If there is any error you will catch them here
  });   
}

// When the page is loaded/refreshed
window.onload = function display () {
  // Everytime you add a new function make sure to call it down here
  showTime();
  getBackgroundImage();
}


// do it all in one onload function in JS file
    