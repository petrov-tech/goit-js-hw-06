const ulRef = document.querySelector("ul#categories");
// console.log("🚀 -> ulRef", ulRef);
console.log("Number of categories:", ulRef.childElementCount); 

const titleRef = document.querySelectorAll('h2')
for (let i = 0; i < titleRef.length; i++) {
  const element = titleRef[i];
  console.log("Category:", element.textContent);
}




const liRef = document.querySelectorAll('li.item ul');
console.log(liRef);
// liRef.forEach(element => {
//   let a = []
//   a += element.length
//   console.log(a)
// });
for (const key in liRef) {
  if (liRef.hasOwnProperty.call(liRef, key)) {
    const element = liRef[key];
    console.log(element)
  }
}





