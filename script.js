const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  // Prevents form from being submitted
  e.preventDefault();

  //
  checkIsEmpty([username, email, password, password2]);
});

function checkIsEmpty(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

function checkLength(val) {}

function checkIsIdentical(password, password2) {}
