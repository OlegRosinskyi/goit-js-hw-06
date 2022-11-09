const NavIdEl = document.querySelector("#categories");
//console.log(NavIdEl);
const getAllItemEl = NavIdEl.querySelectorAll(".item");
//console.log(getAllItemEl);
console.log('Number of categories: ', getAllItemEl.length);
//const getWonHederEl = getAllItemEl[1].querySelector("h2");
//console.log(getWonHederEl.textContent);
//console.log(getWonHederEl);
const getAllHeadEl = NavIdEl.querySelectorAll("h2");
//console.log(getAllHeadEl);

//const getAllLiHederEl = getAllItemEl[0].querySelectorAll("li");
//console.log(getWonHederEl.textContent, getAllLiHederEl.length);
//console.dir(window);
//console.dir(document); 
for (let i = 0; i < getAllHeadEl.length; i += 1) {
    console.log('Category:', getAllItemEl[i].querySelector("h2").textContent);
    console.log('Elements:', getAllItemEl[i].querySelectorAll("li").length);
  //  for (let j = 0; j < getAllLiHederEl[i].querySelectorAll("li").length; j += 1) {
  //  console.log('Elements:', getAllHeadEl[j].querySelectorAll("li").length);
  // };
};
//for (let i = 0; i < array.length; i += 1) {

//}