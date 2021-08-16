const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Eventlistener form submit
form.addEventListener("submit", function (e) {
  // Prevents form from being submitted
  e.preventDefault();

  // Check are inputs empty
  checkIsEmpty([username, email, password, password2]);

  // Check min/max length
  checkLength(username, 4, 12);
  checkLength(password, 8, 20);

  // Check are passwords identical
  checkIsIdentical(password, password2);
});

function checkIsEmpty(arr) {
  arr.forEach((element) => {
    // let inputUnit = element.parentElement;
    if (element.value.length === 0) {
      showError(element, "is empty");
    }
  });
}

function checkLength(val, min, max) {
  // let inputUnit = val.parentElement;
  if (val.value.length < min) {
    showError(val, "less than");
  } else if (val.value.length > max) {
    showError(val, "is too long");
  }
}

function checkIsIdentical(password, password2) {
  if (password.value !== password2.value) {
    // let inputUnit = password.parentElement;
    showError(password, "Please Enter Identical Passwords");
  }
}

function showError(element, errorMessage) {
  let inputUnit = element.parentElement;
  let capitalizedId = element.id[0].toUpperCase() + element.id.substring(1);
  inputUnit.lastElementChild.innerText = `${capitalizedId} ${errorMessage}`;
  inputUnit.lastElementChild.style.visibility = "visible";
}
