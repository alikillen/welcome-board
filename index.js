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

function writeName() {
  let welcomeMsg = document.getElementById('welcome');
  let name = document.getElementById('name');
  let formContent = document.getElementById('entername');

  welcomeMsg.innerHTML = "Welcome "+ name.value;
  // remove form text input box after name is entered
  formContent.innerHTML = "";
}

window.onload = function display() {
  // Everytime you add a new function make sure to call it down here
  showTime();
  getQuote();
}