let headerBtnBasic = document.querySelector(".header .row .col .btn-basic");
let headerBtnBusiness = document.querySelector(
  ".header .row .col .btn-business"
);
let headerBtnPro = document.querySelector(".header .row .col .btn-pro");
let footerCol = document.querySelectorAll(".footer .row .col");

console.log(footerCol[1]);
console.log(footerCol[2]);
console.log(footerCol[3]);

let table = document.querySelector(".table");
console.log("TABLE:", table);

let basicInfo = document.querySelector(".basic");
let businessInfo = document.querySelector(".business");
let proInfo = document.querySelector(".pro");

console.log("BASICINFO:", basicInfo);
console.log("BUSINESSINFO:", businessInfo);
console.log("PROINFO:", proInfo);

console.log(footerCol[0].nextSibling.nextSibling.childNodes[1].classList[3]);
console.log(footerCol[1].nextSibling.nextSibling.childNodes[1].classList[3]);
console.log(footerCol[2].nextSibling.nextSibling.childNodes[1].classList[3]);

// for (let i = 0; i < footerCol.length; i++) {
//   console.log(footerCol[i].childNodes[1]);
// }
// console.log(footerCol.childNodes);

headerBtnBasic.addEventListener("click", function () {
  //REMOVE THE FIRST, THIRD AND FOURTH BOTTOM BUTTONS AND SHOW THE BASIC BUTTON:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "block";

  footerCol[2].style.display = "none";
  footerCol[3].style.display = "none";

  //REMOVE THE BUSINESS AND PRO TBODIES FROM THE PAGE AND SHOW THE "BASIC" CONTENT
  basicInfo.style.display = "block";
  basicInfo.style.width = "100%";
  businessInfo.style.display = "none";
  proInfo.style.display = "none";
});

headerBtnBusiness.addEventListener("click", function () {
  //REMOVE THE FIRST, SECOND AND FOURTH BOTTOM BUTTONS:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "none";
  footerCol[2].style.display = "block";
  footerCol[3].style.display = "none";
  //REMOVE THE BASIC AND PRO TBODIES FROM THE PAGE AND SHOW THE "BUSINESS" CONTENT

  basicInfo.style.display = "none";
  businessInfo.style.display = "block";
  businessInfo.style.width = "100%";
  proInfo.style.display = "none";

  console.log("business");
});

headerBtnPro.addEventListener("click", function () {
  //REMOVES THE FIRST, SECOND AND THIRD BOTTOM BUTTONS:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "none";
  footerCol[2].style.display = "none";
  footerCol[3].style.display = "block";

  //REMOVE THE BASIC AND BUSINESS TBODIES FROM THE PAGE AND SHOW THE "PRO" CONTENT

  basicInfo.style.display = "none";
  businessInfo.style.display = "none";
  proInfo.style.display = "block";
  proInfo.style.width = "100%";

  console.log("pro");
});
