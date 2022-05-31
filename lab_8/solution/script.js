// list of elements in DOM
const form = document.querySelector("form");
const userName = document.getElementById("name");
const userNameError = document.querySelector("#name-error");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail-error");
const role = document.getElementById("role");
const roleError = document.querySelector("#role-error");
const terms = document.getElementById("tos");
const termsError = document.querySelector("#tos-error");
const submit = document.querySelector("button");
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userNameClasses = userName.classList;
  let userNameErorrClasses = userNameError.classList;
  let emailClasses = email.classList;
  let emailErrorClasses = emailError.classList;
  let roleClasses = role.classList;
  let roleErrorClasses = roleError.classList;
  let termsErrorClasses = termsError.classList;

  if (userName.value.trim() === "") {
    userNameClasses.add("error");
    userNameErorrClasses.remove("hidden");
  } else {
    userNameClasses.remove("error");
    userNameErorrClasses.add("hidden");
  }

  if (!email.value.match(emailPattern)) {
    emailClasses.add("error");
    emailErrorClasses.remove("hidden");
  } else {
    emailClasses.remove("error");
    emailErrorClasses.add("hidden");
  }

  if (role.value === "") {
    roleClasses.add("error");
    roleErrorClasses.remove("hidden");
  } else {
    roleClasses.remove("error");
    roleErrorClasses.add("hidden");
  }

  if (!terms.checked) {
    termsErrorClasses.remove("hidden");
  } else {
    termsErrorClasses.add("hidden");
  }
});
