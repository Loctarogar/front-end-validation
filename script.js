const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("username");
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
    let inputUnit = element.parentElement;
    if (element.value.length === 0) {
      let capitalizedId = element.id[0].toUpperCase() + element.id.substring(1);
      inputUnit.lastElementChild.innerText = `${capitalizedId} is empty`;
      inputUnit.lastElementChild.style.visibility = "visible";
    }
  });
}

function checkLength(val, min, max) {
  if (val.value.length < min) {
    console.log(`${val.id} less than ${min}`);
  } else if (val.value.length > max) {
    console.log(`${val.id} longer than ${max}`);
  }
}

function checkIsIdentical(password, password2) {
  if (password.value !== password2.value) {
    console.log("pass != pass2");
  }
}
