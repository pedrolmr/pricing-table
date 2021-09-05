let headerBtnBasic = document.querySelector(".header .row .col .btn-basic");
let headerBtnBusiness = document.querySelector(
  ".header .row .col .btn-business"
);
let headerBtnPro = document.querySelector(".header .row .col .btn-pro");
let footerCol = document.querySelectorAll(".footer .row .col");

// let topButtons = document.querySelector(".header .row .col");
// console.log("Top Buttons", topButtons);

// console.log(footerCol[1]);
// console.log(footerCol[2]);
// console.log(footerCol[3]);

console.log("header basic button:", headerBtnBasic.classList[3]);
console.log("header business button:", headerBtnBusiness.classList[3]);
console.log("header pro button:", headerBtnPro.classList[3]);

let table = document.querySelector(".table");
console.log("TABLE:", table);

let basicInfo = document.querySelectorAll(".basic");
let businessInfo = document.querySelectorAll(".business");
let proInfo = document.querySelectorAll(".pro");

console.log("BASICINFO:", basicInfo);
console.log("BUSINESSINFO:", businessInfo);
console.log("PROINFO:", proInfo);

// console.log(
//   "classessss",
//   footerCol[0].nextSibling.nextSibling.childNodes[1].classList[3]
// );
// console.log(
//   "classessss",
//   footerCol[1].nextSibling.nextSibling.childNodes[1].classList[3]
// );
// console.log(
//   "classessss",
//   footerCol[2].nextSibling.nextSibling.childNodes[1].classList[3]
// );

// const topButtons = [
//   headerBtnBasic.classList[3],
//   headerBtnBusiness.classList[3],
//   headerBtnPro.classList[3],
// ];

headerBtnBasic.addEventListener("click", function () {
  //REMOVE THE FIRST, THIRD AND FOURTH BOTTOM BUTTONS AND SHOW THE BASIC BUTTON:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "block";
  footerCol[2].style.display = "none";
  footerCol[3].style.display = "none";

  //REMOVE THE BUSINESS AND PRO TBODIES FROM THE PAGE AND SHOW THE "BASIC" CONTENT

  for (let i = 0; i < basicInfo.length; i++) {
    if (basicInfo[i].classList[0] == "basic") {
      basicInfo[i].style.display = "block";
      basicInfo[i].style.width = "100%";
    }
  }

  for (let j = 0; j < businessInfo.length; j++) {
    if (businessInfo[j].classList[0] == "business") {
      businessInfo[j].style.display = "none";
    }
  }

  for (let k = 0; k < proInfo.length; k++) {
    if (proInfo[k].classList[0] == "pro") {
      proInfo[k].style.display = "none";
    }
  }
});

headerBtnBusiness.addEventListener("click", function () {
  //REMOVE THE FIRST, SECOND AND FOURTH BOTTOM BUTTONS:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "none";
  footerCol[2].style.display = "block";
  footerCol[3].style.display = "none";
  //REMOVE THE BASIC AND PRO TBODIES FROM THE PAGE AND SHOW THE "BUSINESS" CONTENT
  for (let i = 0; i < basicInfo.length; i++) {
    if (basicInfo[i].classList[0] == "basic") {
      basicInfo[i].style.display = "none";
    }
  }

  for (let j = 0; j < businessInfo.length; j++) {
    if (businessInfo[j].classList[0] == "business") {
      businessInfo[j].style.display = "block";
      businessInfo[j].style.width = "100%";
    }
  }

  for (let k = 0; k < proInfo.length; k++) {
    if (proInfo[k].classList[0] == "pro") {
      proInfo[k].style.display = "none";
    }
  }

  console.log("business");
});

headerBtnPro.addEventListener("click", function () {
  //REMOVES THE FIRST, SECOND AND THIRD BOTTOM BUTTONS:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "none";
  footerCol[2].style.display = "none";
  footerCol[3].style.display = "block";

  //REMOVE THE BASIC AND BUSINESS TBODIES FROM THE PAGE AND SHOW THE "PRO" CONTENT
  for (let i = 0; i < basicInfo.length; i++) {
    if (basicInfo[i].classList[0] == "basic") {
      basicInfo[i].style.display = "none";
    }
  }

  for (let j = 0; j < businessInfo.length; j++) {
    if (businessInfo[j].classList[0] == "business") {
      businessInfo[j].style.display = "none";
    }
  }

  for (let k = 0; k < proInfo.length; k++) {
    if (proInfo[k].classList[0] == "pro") {
      proInfo[k].style.display = "block";
      proInfo[k].style.width = "100%";
    }
  }

  console.log("pro");
});
