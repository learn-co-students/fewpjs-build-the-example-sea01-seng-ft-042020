const modal = document.getElementById("modal");
modal.className = "hidden"
document.addEventListener("DOMContentLoaded", function () {
  // Defining text characters for the empty and full hearts for you to use later.
  const EMPTY_HEART = "♡";
  const FULL_HEART = "♥";
  const hearts = document.querySelectorAll(".like-glyph");

  // Your JavaScript code goes here
  //Event Listeners
  hearts.forEach((heart) => {
    heart.addEventListener("click", handleLikeClick);
  });

  //Event Handlers
  function handleLikeClick(e) {
    mimicServerCall()
      .then((resp) => {
        resp;
        let heartGlyph = e.target;
        console.log(resp);
        if (heartGlyph.innerHTML == EMPTY_HEART) {
          heartGlyph.innerHTML = FULL_HEART;
          heartGlyph.className = "activated-heart";
        } else {
          heartGlyph.innerHTML = EMPTY_HEART;
          heartGlyph.className = "";
        }
      })
      .catch((error) => {
        modal.className = ""
        console.log(error);
        modal.innerText = error;
        setTimeout(function () {modal.className = "hidden"}, 5e3);
      });
  }
  //------------------------------------------------------------------------------
  // Ignore after this point. Used only for demo purposes
  //------------------------------------------------------------------------------

  function mimicServerCall(
    url = "http://mimicServer.example.com",
    config = {}
  ) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < 0.2;
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
});
