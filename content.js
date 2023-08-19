console.log("hi");
let password = document.getElementById("set-password");
let confirmPassword = document.getElementById("confirm-password");

console.log({ password });

let submit = document.getElementById("submit");

password.addEventListener("mouseout", function () {
  let value = document.getElementById("set-password").value;
  console.log({ value });
});

submit.addEventListener("click", validatePassword);

function validatePassword() {
  let value = document.getElementById("set-password").value;
  let connfirmVal = document.getElementById("confirm-password").value;

  if (value != connfirmVal) {
    submit.textContent = "Passwords must match";
    console.log("Password must match");
  }
}
