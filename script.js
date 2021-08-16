const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const inputError = "input-error";
const inputSuccess = "input-success";

// Form submit eventlistener
form.addEventListener("submit", function (e) {
  // Prevents form from being submitted
  e.preventDefault();

  // Check are passwords identical
  checkIsIdentical(password, password2);

  // Check are inputs empty
  checkIsEmpty([username, password, password2]);

  // Email validation
  validateEmail(email);
  console.log("email - ", email);

  // Check min/max length
  checkLength(username, 4, 12);
  checkLength(password, 8, 20);
});

function checkIsEmpty(arr) {
  arr.forEach((element) => {
    if (element.value.length === 0) {
      showMessage(element, "is empty", inputError);
    } else {
      changeInputClass(element, inputSuccess);
    }
  });
}

function checkLength(val, min, max) {
  if (val.value.length < min) {
    showMessage(val, "is too short", inputError);
  } else if (val.value.length > max) {
    showMessage(val, "is too long", inputError);
  } else {
    changeInputClass(val, inputSuccess);
  }
}

function checkIsIdentical(password, password2) {
  if (password.value !== password2.value) {
    showMessage(password, "Please Enter Identical Passwords", inputError);
  } else {
    changeInputClass(password, inputSuccess);
  }
}

function validateEmail(element) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = element.value;
  let inputUnit = element.parentElement;
  if (re.test(String(email).toLowerCase())) {
    changeInputClass(element, inputSuccess);
  } else {
    showMessage(element, " please enter correct email", inputError);
  }
}

function showMessage(element, errorMessage, inputClass) {
  let inputUnit = element.parentElement;
  let capitalizedId = element.id[0].toUpperCase() + element.id.substring(1);
  inputUnit.lastElementChild.innerText = `${capitalizedId} ${errorMessage}`;
  changeErrorTextVisibility(inputUnit, "visible");
  changeInputClass(element, inputClass);
}

function changeInputClass(element, inputClass) {
  let inputUnit = element.parentElement;
  element.classList = inputClass;
  if (inputClass == "input-success") {
    changeErrorTextVisibility(inputUnit, "hidden");
  }
}

function changeErrorTextVisibility(inputUnit, visibility) {
  inputUnit.lastElementChild.style.visibility = visibility;
}
