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
const liArray = []

ingredients.forEach((e) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = e;
  console.log(li);
  liArray.push(li);
});
ulRef.append(...liArray)