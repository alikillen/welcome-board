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
  fetch('https://api.unsplash.com/photos/random/?client_id=NqIsO3c4yryENpk6v__yQqDe8I_dMASVVrLTcba8X1Q')
  // convert to json???
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
  // Here you get the data to modify as you please
      // document.body.style.backgroundImage = data;
      // getting a 401 error - no API key

      let photoUrl = data.urls.full
      // does this need to more specific - object in postman with raw url
      console.log(photoUrl)

      // console.log(document.getElementById("wrapper"))

      // var test = document.createElement('img')
      // test.src = photoUrl
      // console.log(test)
      // quoteDiv = document.getElementById("quote")
      // console.log(quoteDiv)
      // quoteDiv.append(test)

      // document.html.style.backgroundImage = "url(" + photoUrl + ")"

      // jquery syntax
      // $("wrapper").css("background-image", "url(" + photoUrl + ")");

      // console.log(document.getElementById("wrapper"))

      // document.getElementById("wrapper").style.backgroundImage = "url(" + photoUrl + ")"

    
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
        <img class="random-image" src="${photoUrl}" alt="random"/>
        `
        document.body.appendChild(item);
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
    