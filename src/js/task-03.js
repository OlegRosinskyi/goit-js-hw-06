const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const NavUlEl = document.querySelector(".gallery");
//console.log(NavUlEl.innerHTML);
const lastInLiImageEl = images
  .map(({ url, alt }) =>
  `<li class = "item"> <img class="imgformat" src="${url}" alt="${alt}" width="450" ></li >`)
  .join("");
NavUlEl.insertAdjacentHTML('beforeend', lastInLiImageEl);
//console.log(NavUlEl.innerHTML);
NavUlEl.classList.add("list"); 
//console.log(NavUlEl);
const NavUlEll = document.querySelector(".gallery");
const list = document.querySelector(".list");
//console.log(list);
list.style.background = "rgba(47, 48, 58, 0.4)";
list.style.display = "Flex";  //display: 'flex';
list.style.flexwrap = "wrap";
list.style.gap = "30px";
list.style.listStyle = "none";
list.style.paddingTop = "24px";
list.style.paddingLeft = "0";
list.style.paddingRight = "0";
list.style.paddingBottom = "24px";

const imgformats = document.querySelectorAll(".imgformat");
//console.log(imgformats);
imgformats.forEach(imgformat => {
  imgformat.style.width = "100%";
  imgformat.style.height = "auto";
});

 paddingBottom: ;

//width: 100%;
//      height: auto;//list-style: none;

//const colors = [
 //	"red","green","blue","yellow" ];
//const imagElements = document.querySelectorAll(".imgformat");
//console.log(imagEl);
//const setBorder = imagElements.map
//elem.classList.add("img") 
//const images = document.querySelector(".img");
//display: flex;
//    flex-wrap: wrap;
//    gap: 30px;