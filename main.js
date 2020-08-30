// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const addLikeListeners = () => {
  const likeFields = document.getElementsByClassName("like-glyph")
    for (const like of likeFields){
      like.addEventListener("click", handleLike, false)
    }
}

const handleLike = (event) => {

  mimicServerCall()
  .then(resp => {
    console.log(resp)
    if(event.target.innerText === EMPTY_HEART){
      event.target.innerText = FULL_HEART
      event.target.classList.add("activated-heart")
    } else {
      event.target.innerText = EMPTY_HEART
      event.target.classList.remove("activated-heart")
    }
  })
  .catch(error => {
    console.log(error)
    errorModal = document.getElementById("modal")
    errorModal.classList.remove("hidden")
    setInterval(3000)
    errorModal.classList.add("hidden")
  })

}

window.addEventListener('load', addLikeListeners, false)

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
