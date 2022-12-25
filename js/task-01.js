const liRef = document.querySelectorAll("li.item");
// console.log("Number of categories:", liRef.length);
console.log(`Number of categories: ${liRef.length}`);

liRef.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`)
  // console.log("Category:", element.querySelector("h2").textContent);
  console.log(`Elements: ${element.lastElementChild.children.length}`)
  // console.log("Elements:", element.querySelectorAll("li").length);
});
