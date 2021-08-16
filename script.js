const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const inputError = "input-error";
const inputSuccess = "input-success";

// Eventlistener form submit
form.addEventListener("submit", function (e) {
  // Prevents form from being submitted
  e.preventDefault();

  // Check are passwords identical
  checkIsIdentical(password, password2);

  // Check are inputs empty
  checkIsEmpty([username, email, password, password2]);

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
    showMessage(val, "less than", inputError);
  } else if (val.value.length > max) {
    showMessage(val, "is too long", inputError);
  } else {
    console.log("success2");
    changeInputClass(val, inputSuccess);
  }
}

function checkIsIdentical(password, password2) {
  if (password.value !== password2.value) {
    showMessage(password, "Please Enter Identical Passwords", inputError);
  } else {
    console.log("success3");
    changeInputClass(password, inputSuccess);
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
