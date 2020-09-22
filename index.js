console.log("hello from the script!")

// appending text to a P tag
function showTime() {
  // add time to p tag
  let time = new Date();
  let currentTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  let clockDisplay = document.getElementById("test");

  clockDisplay.innerText = currentTime;
};

function getQuote() {
  const quote = document.querySelector("#quote");
  const author = document.querySelector("#author");

  // Quote automatically loads when page is loaded
  // window.addEventListener('load', getQuote);

  fetch("http://api.quotable.io/random")
  .then(res => res.json())
  .then(data => {
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = `${data.author}`;
  })
}

function getBackgroundImage() {
  fetch('https://api.unsplash.com/photos/random/?client_id=NqIsO3c4yryENpk6v__yQqDe8I_dMASVVrLTcba8X1Q')
  // get rid of secret key/dont upload
  .then(response => response.json())
  .then(function(data) {
    // console.log(data)
    
      let photoUrl = data.urls.full     
      // console.log(photoUrl)
      //   console.log(the_html)
      document.getElementById('the_html').style.backgroundImage = "url(" + photoUrl + ")"
        })
   

  .catch(function(error) {
    console.log(error)
  });   

}

// do it all in one onload function in JS file
// When the page is loaded/refreshed, calls all funcs
window.onload = function display () {
  // Everytime you add a new function make sure to call it down here
  showTime();
  getQuote();
  getBackgroundImage();
}



    