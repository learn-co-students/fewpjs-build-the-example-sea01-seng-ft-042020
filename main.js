// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById("modal")
// Your JavaScript code goes here!


document.addEventListener("click", function(e){

  mimicServerCall()

  .then(() => {
    console.dir(e)
    if (e.target.className == 'like-glyph'){
      e.target.innerHTML = FULL_HEART
      e.target.className = 'activated-heart'
    } else {
      e.target.innerHTML = EMPTY_HEART
      e.target.className = 'like-glyph'
    }
  })
  .catch(() => {
    const element = document.getElementById("modal")
    element.className = ''
    setTimeout(function(){ element.className = 'hidden' }, 5000)
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
