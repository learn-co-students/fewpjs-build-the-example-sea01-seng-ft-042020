// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.getElementById("modal")
errorMessage.className = "hidden"
const hearts = document.querySelectorAll(".like-glyph")
console.log(hearts)

function like() {
  for (i = 0; i < hearts.length; i++) {
    let heart = hearts[i]
    heart.id = i
    heart.addEventListener("click", function() {
      mimicServerCall()
      .then(function() {
        if (heart.innerText == EMPTY_HEART) {
        heart.className = "activated-heart"
        heart.innerText = FULL_HEART
        }
        else {
          heart.className = "like-glyph"
          heart.innerText = EMPTY_HEART
        }
      })
      .catch(function(error) {
        errorMessage.classList.remove("hidden");
        setTimeout(function() {
          errorMessage.className = "hidden"
        }, 5000)
      })
    })
  }
}
like()

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
