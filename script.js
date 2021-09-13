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
      // basicInfo[i].style.visibility = "visible";
      // basicInfo[i].classList.add("show-on-mobile");

      // basicInfo[i].className += " show-on-mobile";
      basicInfo[i].style.width = "100%";

      // basicInfo[i].style.width = "100%";

      console.log("BASIC INFO:", basicInfo[i]);
    }
  }

  for (let j = 0; j < businessInfo.length; j++) {
    if (businessInfo[j].classList[0] == "business") {
      businessInfo[j].style.display = "none";
      // businessInfo[j].style.visibility = "hidden";
    }
  }

  for (let k = 0; k < proInfo.length; k++) {
    if (proInfo[k].classList[0] == "pro") {
      proInfo[k].style.display = "none";
      // proInfo[k].style.visibility = "hidden";
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
      // basicInfo[i].style.visibility = "hidden";
    }
  }

  for (let j = 0; j < businessInfo.length; j++) {
    if (businessInfo[j].classList[0] == "business") {
      businessInfo[j].style.display = "block";
      // businessInfo[j].style.visibility = "visible";
      // businessInfo[j].classList.add("show-on-mobile");
      // businessInfo[j].className += " show-on-mobile";
      businessInfo[j].style.width = "100%";

      // businessInfo[j].style.width = "100%";
      console.log("BUSINESS INFO:", businessInfo[j]);
    }
  }

  for (let k = 0; k < proInfo.length; k++) {
    if (proInfo[k].classList[0] == "pro") {
      proInfo[k].style.display = "none";
      // proInfo[k].style.visibility = "hidden";
    }
  }

  console.log("business");
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
      // basicInfo[i].style.visibility = "hidden";
    }
  }

  for (let j = 0; j < businessInfo.length; j++) {
    if (businessInfo[j].classList[0] == "business") {
      businessInfo[j].style.display = "none";
      // businessInfo[j].style.visibility = "hidden";
    }
  }

  for (let k = 0; k < proInfo.length; k++) {
    if (proInfo[k].classList[0] == "pro") {
      proInfo[k].style.display = "block";
      // proInfo[k].style.visibility = "hidden";
      // proInfo[k].classList.add("show-on-mobile");
      // proInfo[k].className += " show-on-mobile";
      proInfo[k].style.width = "100%";

      // proInfo[k].style.width = "100%";

      console.log("PRO INFO:", proInfo[k]);
    }
  }

  console.log("pro");
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
        // basicInfo[i].style.visibility = "visible";
        basicInfo[i].style.width = "100%";
        // console.log("BASIC INFO:", basicInfo[i]);
      }
    }

    for (let j = 0; j < businessInfo.length; j++) {
      if (businessInfo[j].classList[0] == "business") {
        businessInfo[j].style.display = "none";
        // businessInfo[j].style.visibility = "hidden";
      }
    }

    for (let k = 0; k < proInfo.length; k++) {
      if (proInfo[k].classList[0] == "pro") {
        proInfo[k].style.display = "none";
        // proInfo[k].style.visibility = "hidden";
      }
    }

    headerBtnBasic.addEventListener("click", showBasic);
    headerBtnBusiness.addEventListener("click", showBusiness);
    headerBtnPro.addEventListener("click", showPro);
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

    console.log("basic info:", basicInfo);
    console.log("business info:", businessInfo);
    console.log("pro info:", proInfo);

    for (let i = 0; i < basicInfo.length; i++) {
      if (basicInfo[i].classList[0] == "basic") {
        basicInfo[i].style.display = "";
        // basicInfo[i].style.border = "3px solid red";
        //set basicInfo to a row
        basicInfo[i].style.width = "";
        // basicInfo[i].style.width = "50%";

        // basicInfo[i].style.width = "100%";
        // console.log("BASIC INFO:", basicInfo[i]);
      }
    }

    for (let j = 0; j < businessInfo.length; j++) {
      if (businessInfo[j].classList[0] == "business") {
        businessInfo[j].style.display = "";
        businessInfo[j].style.width = "";
        // businessInfo[j].style.width = "50%";
        // businessInfo[j].style.border = "3px solid purple";
      }
    }

    for (let k = 0; k < proInfo.length; k++) {
      if (proInfo[k].classList[0] == "pro") {
        proInfo[k].style.display = "";
        proInfo[k].style.width = "";
        // proInfo[k].style.width = "50%";
        // proInfo[k].style.border = "3px solid yellow";
      }
    }

    headerBtnBasic.removeEventListener("click", showBasic);
    headerBtnBusiness.removeEventListener("click", showBusiness);
    headerBtnPro.removeEventListener("click", showPro);
  }
}

mediaQuery.addListener(handleMobileChange);
handleMobileChange(mediaQuery);
