const ulRef = document.querySelector("ul#categories");
console.log("🚀 -> ulRef", ulRef);


const liRef = document.querySelectorAll("li.item");
console.log("Number of categories:", liRef.length);

liRef.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
