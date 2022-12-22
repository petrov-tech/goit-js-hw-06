const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("ul#ingredients");
console.log(ulRef);

ingredients.forEach((e) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = e;
  console.log(li);
  ulRef.append(li);
});

// let a = document.createElement('li')
// a.classList.add('item');
// a.textContent = "Potatoes";
// console.log(a)
