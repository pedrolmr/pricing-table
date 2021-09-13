//TOP BUTTONS
let headerBtnBasic = document.querySelector(".header .row .col .btn-basic");
let headerBtnBusiness = document.querySelector(
  ".header .row .col .btn-business"
);
let headerBtnPro = document.querySelector(".header .row .col .btn-pro");

//BOTTOM BUTTONS
let footerCol = document.querySelectorAll(".footer .row .col");

//INFO
let basicInfo = document.querySelectorAll(".basic");
let businessInfo = document.querySelectorAll(".business");
let proInfo = document.querySelectorAll(".pro");

const showBasic = () => {
  //REMOVE THE FIRST, THIRD AND FOURTH BOTTOM BUTTONS AND SHOW THE BASIC BUTTON:

  footerCol[0].style.display = "none";
  footerCol[1].style.display = "block";
  footerCol[2].style.display = "none";
  footerCol[3].style.display = "none";

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
};

const showBusiness = () => {
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
};

const showPro = () => {
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
};

const mediaQuery = window.matchMedia("(max-width: 660px)");

function handleMobileChange(e) {
  if (e.matches) {
    footerCol[0].style.display = "none";
    footerCol[1].style.display = "block";
    footerCol[2].style.display = "none";
    footerCol[3].style.display = "none";

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

    headerBtnBasic.addEventListener("click", showBasic);
    headerBtnBusiness.addEventListener("click", showBusiness);
    headerBtnPro.addEventListener("click", showPro);

    // headerBtnBasic.innerHTML = "Basic";
    // headerBtnBusiness.innerHTML = "Business";
    // headerBtnPro.innerHTML = "Pro";
  } else {
    footerCol[0].style.display = "flex";
    footerCol[1].style.display = "flex";
    footerCol[2].style.display = "flex";
    footerCol[3].style.display = "flex";

    footerCol[0].style.justifyContent = "center";
    footerCol[0].style.alignItems = "center";

    footerCol[1].style.justifyContent = "center";
    footerCol[1].style.alignItems = "center";

    footerCol[2].style.justifyContent = "center";
    footerCol[2].style.alignItems = "center";

    footerCol[3].style.justifyContent = "center";
    footerCol[3].style.alignItems = "center";

    for (let i = 0; i < basicInfo.length; i++) {
      if (basicInfo[i].classList[0] == "basic") {
        basicInfo[i].style.display = "";
        basicInfo[i].style.width = "";
      }
    }

    for (let j = 0; j < businessInfo.length; j++) {
      if (businessInfo[j].classList[0] == "business") {
        businessInfo[j].style.display = "";
        businessInfo[j].style.width = "";
      }
    }

    for (let k = 0; k < proInfo.length; k++) {
      if (proInfo[k].classList[0] == "pro") {
        proInfo[k].style.display = "";
        proInfo[k].style.width = "";
      }
    }

    headerBtnBasic.removeEventListener("click", showBasic);
    headerBtnBusiness.removeEventListener("click", showBusiness);
    headerBtnPro.removeEventListener("click", showPro);
  }
}

mediaQuery.addListener(handleMobileChange);
handleMobileChange(mediaQuery);
