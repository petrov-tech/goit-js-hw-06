const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
//   console.log(email.value, password.value);
  if (email.value == "" || password.value == "") {
    return alert("Please fill in all the fields!");
  }
  const userData = { email: email.value, password: password.value };
  console.log(userData);
  loginForm.reset();
// event.currentTarget.reset()// чи можете пояснити чи є різниця як скидувати форму?
});
