let password = document.getElementById("set-password");
let confirmPassword = document.getElementById("confirm-password");
let invalidPassword = document.getElementById("invalid-passwords");

let submit = document.getElementById("submit");

submit.addEventListener("click", validatePassword);

//submit.addEventListener("submit", function (event) {
//  let value = document.getElementById("set-password").value;
//let connfirmVal = document.getElementById("confirm-password").value;
//if (value != connfirmVal) {
// event.preventDefault();
//} else {
//submit.attachEvent("onsubmit", function (evt) {
//evt.preventDefault();
//});
//}
//});

function validatePassword(event) {
  let value = document.getElementById("set-password").value;
  let connfirmVal = document.getElementById("confirm-password").value;
  if (value != connfirmVal) {
    submit.onsubmit = event.preventDefault();
    invalidPassword.style.color = "red";
    invalidPassword.textContent = "* Passwords must match";
  }
}
