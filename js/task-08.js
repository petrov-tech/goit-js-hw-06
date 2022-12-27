const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userData = { email: email.value, password: password.value };
  console.log(userData);
  loginForm.reset();
console.log(
  "event.currentTarget.reset() or loginForm.reset(); можете пояснити чи є різниця як скидувати форму?"
);
});
