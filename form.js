const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// add events

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validate();
});

// for final data validation
const successMsg = (usernameVal) => {
  let formCon = document.getElementsByClassName("form-control");
  let count = 0;
  for (let i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      count++;
    }
  }
  if (count === formCon.length) {
    alert(`Welcome ${username.value} ! You can order Now`);
    location.href = `addToCart.html?username=${usernameVal}`;
  }
};

// more email validate
function isEmail(emailVal) {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false; // @ symbol cannot be at first position
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false; // vinod@abc.as     means dot can be placed after three place of @ symbol
  if (dot === emailVal.length - 1) return false; // last character is dot, return false
  return true;
}
// define the validate function
const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();

  // validate username
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "username min 3 char");
  } else {
    setSuccessMsg(username);
  }
  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }
  // validate phone
  if (phoneVal === "") {
    setErrorMsg(phone, "phone cannot be blank");
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, "Not a valid phone number");
  } else {
    setSuccessMsg(phone);
  }

  successMsg(usernameVal);
};
function setErrorMsg(input, errormsgs) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}
function setSuccessMsg(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
