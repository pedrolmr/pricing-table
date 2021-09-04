// let bottomBtnBasic = document.querySelector(".footer .row .col .btn-basic");
// let bottomBtnBusiness = document.querySelector(".footer .row .col .btn-business");
// let bottomBtnPro = document.querySelector(".footer .row .col .btn-pro");
let headerBtnBasic = document.querySelector(".header .row .col .btn-basic");
let headerBtnBusiness = document.querySelector(
  ".header .row .col .btn-business"
);
let headerBtnPro = document.querySelector(".header .row .col .btn-pro");
let footerCol = document.querySelectorAll(".footer .row .col");

console.log(footerCol[1]);
console.log(footerCol[2]);
console.log(footerCol[3]);

// let bottomBtnBasic = document.querySelector(".footer .row .col .btn-basic");
// let bottomBtnBusiness = document.querySelector(
//   ".footer .row .col .btn-business"
// );
// let bottomBtnPro = document.querySelector(".footer .row .col .btn-pro");

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

  // tbody {
  //   width: 100%;
  //   td {
  //     width: 50%;
  //   }
  //   .business,
  //   .pro {
  //     display: none;
  //   }
  // }

  console.log("basic");
});

headerBtnBusiness.addEventListener("click", function () {
  //REMOVE THE FIRST, SECOND AND FOURTH BOTTOM BUTTONS:

  //&:nth-child(1) {
  //   display: none;
  // }
  // &:nth-child(2) {
  //   display: none;
  // }
  // &:nth-child(4) {
  //   display: none;
  // }

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "none";
  footerCol[2].style.display = "block";
  footerCol[3].style.display = "none";
  //REMOVE THE BASIC AND PRO TBODIES FROM THE PAGE AND SHOW THE "BUSINESS" CONTENT

  // tbody {
  //   width: 100%;
  //   td {
  //     width: 50%;
  //   }
  //   .basic,
  //   .pro {
  //     display: none;
  //   }
  // }

  console.log("business");
});

headerBtnPro.addEventListener("click", function () {
  //REMOVES THE FIRST, SECOND AND THIRD BOTTOM BUTTONS:

  //&:nth-child(1) {
  //   display: none;
  // }
  // &:nth-child(2) {
  //   display: none;
  // }
  // &:nth-child(3) {
  //   display: none;
  // }

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "none";
  footerCol[2].style.display = "none";
  footerCol[3].style.display = "block";

  //REMOVE THE BASIC AND BUSINESS TBODIES FROM THE PAGE AND SHOW THE "PRO" CONTENT

  // tbody {
  //   width: 100%;
  //   td {
  //     width: 50%;
  //   }
  //   .basic,
  //   .pro {
  //     display: none;
  //   }
  // }

  console.log("pro");
});
