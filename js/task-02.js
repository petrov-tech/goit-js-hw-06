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

// let b = document.createElement("li");
// b.classList.add("item");
// b.textContent = "Mushrooms";
// console.log(b);
// let c = document.createElement("li");
// c.classList.add("item");
// c.textContent = "Garlic";
// console.log(c);
// let d = document.createElement("li");
// d.classList.add("item");
// d.textContent = "Tomatos";
// console.log(d);
// let e = document.createElement("li");
// e.classList.add("item");
// e.textContent = "Herbs";
// console.log(e);
// let f = document.createElement("li");
// f.classList.add("item");
// f.textContent = "Condiments";
// console.log(f);

// ulRef.append(a, b, c, d, e, f);
