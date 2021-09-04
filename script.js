let btnBasic = document.querySelector(".btn-basic");
let btnBusiness = document.querySelector(".btn-business");
let btnPro = document.querySelector(".btn-pro");

btnBasic.addEventListener("click", function () {
  //REMOVE THE FIRST, THIRD AND FOURTH BOTTOM BUTTONS AND SHOW THE BASIC BUTTON:

  //&:nth-child(1) {
  //   display: none;
  // }
  // &:nth-child(3) {
  //   display: none;
  // }
  // &:nth-child(4) {
  //   display: none;
  // }

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

btnBusiness.addEventListener("click", function () {
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

btnPro.addEventListener("click", function () {
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
