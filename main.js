// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  // Toggle Page Error
  function togglePageError() {
    const pageError = document.getElementById('modal')
    pageError.classList.remove('hidden')
    setTimeout(function() {pageError.setAttribute('class','hidden')}, 5000)
  }

  // Toggle Like Button via Event Listener
  function toggleLike(likeButton) {
    likeButton.addEventListener('click', function(event) {
      if (event.target.innerText === EMPTY_HEART) {
        mimicServerCall()
        .then(function() {
          event.target.innerHTML = FULL_HEART
          event.target.classList.add('activated-heart')})
        .catch(function(error) {
          togglePageError()})
      } else {
        event.target.innerHTML = EMPTY_HEART
        event.target.classList.remove('activated-heart')
      }
    })
  }

  // Add Event Listener on All Like Buttons
  const likeButtons = document.getElementsByClassName('like-glyph')
  for (const likeButton of likeButtons) {
    toggleLike(likeButton)
  }
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
