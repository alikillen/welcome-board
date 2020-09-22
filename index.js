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
      // edit opacity here
        })
   

  .catch(function(error) {
    console.log(error)
  });   

}

function writeName() {
  let nameDiv = document.getElementById('nameDiv');
  let namePara = document.getElementById('namePara')
  let name = document.getElementById('nameText');
  let formContent = document.getElementById('nameForm');

  namePara.innerHTML = "Welcome "+ name.value;
  // // remove form text input box after name is entered
  formContent.innerHTML = "";
  // console.log(name.value)
  // let welcomeMessageDiv = document.getElementById("dynamicWelcomeMessage")
  // console.log(welcomeMessageDiv)

  // trying to return name value into welcome message div
  // if (name.value !== undefined){
  //   let welcomeMessageDiv = document.getElementById("dynamicWelcomeMessage")
  //   console.log(welcomeMessageDiv)
  //   welcomeMessageDiv.innerHTML = `Welcome, ${name.value}`
  //   // name.innerHTML = "";
  //   nameDiv.innerHTML = "";
  // }

}

function getNews (){
  fetch('http://newsapi.org/v2/top-headlines?country=au&apiKey=b4206a91352b415dbd530477c1c6c1ea', {mode: 'cors'})
  // get rid of secret key/dont upload
  // fix CORS - refactor into XML?
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    // let newsHeadline =
    // get data from json api news object
    // let newsUl = document.createElement('ul')

    // for each headline create a li inside the div, append to ul, append ul to div
    // data.forEach {headline,
    

    // headlineLi = document.createElement('li')
    // headlineLi.innerHTML =
    // // and set innerhtml of li to include hyperlink to article 
    // }

  // document.getElementById("news").append(newsUl)

    // 
        })
   

  .catch(function(error) {
    console.log(error)
  });   

}


function writeGoal(){
  let goalPara = document.getElementById('goalPara');
  let goalForm = document.getElementById('goalForm');
  // let goalFormContent = document.getElementById('goalText');
  goalPara.innerHTML = `Today's Goal: ${goalText.value}`;
  goalForm.innerHTML = "";
}


// do it all in one onload function in JS file
// When the page is loaded/refreshed, calls all funcs
window.onload = function display () {
  // Everytime you add a new function make sure to call it down here
  showTime();
  getQuote();
  getBackgroundImage();
  getNews();
}
