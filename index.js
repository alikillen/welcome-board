console.log("hello from the script!")

// trigger this function on window load

window.addEventListener('load', function getBackgroundImage() {

  console.log("starting request");

  fetch('https://api.unsplash.com/photos/random')
    .then(function(data) {
      console.log(data)
    // Here you get the data to modify as you please
        // document.body.style.backgroundImage = data;
        // getting a 401 error - no API key
      })
    })
    .catch(function(error) {
      console.log(error)
    // If there is any error you will catch them here
    });   

    // getBackgroundImage()

    // do it all in one onload function in JS file
    