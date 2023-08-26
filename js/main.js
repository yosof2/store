/* + for Arrow in The Main */
let arrowLeft = document.querySelector(`.fa-solid.fa-arrow-left.fs-3`);
let arrowRight = document.querySelector(`.fa-solid.fa-arrow-right.fs-3`);
let header = document.querySelector(`header`);
let percent = document.querySelector(`.x.h-50.w-100.bg-white`);
let bg = [
  "background-image: url(img/header-big/pic-2.jpg);",
  "background-image: url(img/header-big/bg-main1.png);",
  "background-image: url(img/header-big/bg-main2.png);",
  "background-image: url(img/header-big/bg-spider.png);",
];
let listPercent = ["h-0", "h-25", "h-50", "h-75", "h-100"];
let i = 2;

arrowLeft.addEventListener("click", function () {
  i--;
  if (i == -1) {
    i = 4;
  }
  percent.classList.remove("h-25", "h-50", "h-75", "h-100");
  percent.classList.add(listPercent[i]);
  header.style.cssText = bg[i];
});
arrowRight.addEventListener("click", function () {
  i++;
  percent.classList.remove("h-25", "h-50", "h-75", "h-100");
  percent.classList.add(listPercent[i]);
  header.style.cssText = bg[i];
  if (i == 4) {
    i = 0;
  }
});
/* - for Arrow in The Main */

let men = document.querySelector(`.nav-link.x`);
let iconSecation1 = document.querySelector(`.iconSecation1`);
let iconSecation1a = document.querySelector(`.iconSecation1 a`);
let navIndex = 2 ;
let img = document.querySelector(`.navImg`);

men.addEventListener("click", function (e) {
  let men = document.querySelector(`.men.bg-white.w-100.position-absolute`);
  let top = document.querySelector(`.topNav`);
  men.classList.toggle("d-none");
  top.classList.toggle("d-none");
  let r = document.querySelector(':root');
  
  if(navIndex%2==0){
    r.style.setProperty('--navColor', '#000');
    img.src = "img/header-big/logo.png";
    
  }else{
    r.style.setProperty('--navColor', '#fff');
    img.src = "img/header-big/logo.png";
  }
  navIndex++;
});
let r = document.querySelector(':root');
if(this.window.innerWidth>768){
  r.style.setProperty('--navColor', '#fff');
}else{
  r.style.setProperty('--navColor', '#000');
}

// change the icon in the color header when the size of the screen change 
window.addEventListener("resize" , function(){
  let r = document.querySelector(':root');
  if(this.window.innerWidth>768){
    r.style.setProperty('--navColor', '#fff');
  }else{
    r.style.setProperty('--navColor', '#000');
  }
})

// login
let login = document.querySelector(`.login`);
let personal = document.querySelector(`.pop`);
let personal2 = document.querySelectorAll(`.pop`);
personal.addEventListener("click", function () {
  login.classList.toggle("d-none");
  login.style.cssText = `background: #0000006b`;
});

// lodin footer 
let footLogin = document.querySelector(`.footLogin`);
footLogin.addEventListener("click" , function(){
  login.classList.toggle("d-none")
  login.style.cssText = `background: #0000006b`;
})

// login when you click to arrow in the main 
let cicle = document.querySelector(`.cicle.shop`);
cicle.addEventListener("click", function () {
  login.classList.toggle("d-none");
  login.style.cssText = `background: #0000006b`;
});

// to close 
let close = document.querySelector(`.closepersonal`);
close.addEventListener("click", function () {
  login.classList.toggle("d-none");
});

// to close sign in
let closeSingIn = document.querySelector(`.closeSingIn`);
closeSingIn.addEventListener("click", function () {
  signUpUi.classList.toggle("d-none");
});

// in oclock in word sign in 
let signUp = document.querySelector(`.signUp`);
let signUpUi = document.querySelector(`.signUpUi`);
signUp.addEventListener("click", function () {
  login.classList.toggle("d-none");
  signUpUi.classList.toggle("d-none");
  signUpUi.style.cssText = `background: #0000006b`;
});

// in oclock on word forget pass
let forgotPassword = document.querySelector(`.forgotPassword`);
let btn_Forgot = document.querySelector(`.btn_Forgot`);
btn_Forgot.addEventListener("click", function () {
  login.classList.toggle("d-none");
  forgotPassword.classList.toggle("d-none");
  forgotPassword.style.cssText = `background: #0000006b`;
});

// close winddow password
let btnForgotPassword = document.querySelector(`.btnForgotPassword`);
btnForgotPassword.addEventListener("click", function () {
  forgotPassword.classList.toggle("d-none");
});

// clic in list 
let listTopSec1 = document.querySelector(`.listTopSec1`);
let listS1 = document.querySelector(`.fa-light.fa-bars`);
listS1.addEventListener("click", function () {
  listTopSec1.classList.toggle("d-none");
});

// click in sign in in small screeen 
personal2[1].addEventListener("click", function () {
  login.classList.toggle("d-none");
  listTopSec1.classList.toggle("d-none");
});

// + hero
let ImgeConteent = document.querySelectorAll(".container .image-container");
let h2IsidePhptp = document.querySelectorAll(
  ".container .image-container .h2Butt"
);
let h2IsidePhptpx = document.querySelector(
  ".container .image-container .h2Butt"
);
h2IsidePhptpx.style.cssText = "display: block;";
h2IsidePhptpx.parentElement.parentElement.style.cssText = "flex: 2;";
console.log(h2IsidePhptpx.parentElement.parentElement);
for (let i = 0; i < ImgeConteent.length; i++) {
  ImgeConteent[i].addEventListener("click", function () {
    ImgeConteent.forEach(function (e) {
      e.style.cssText = "flex: 1;";
    });
    h2IsidePhptp.forEach(function (e) {
      e.style.cssText = "display: none;";
    });
    h2IsidePhptp[i].style.cssText = "display: block;";
    this.style.cssText = "flex: 2;";
  });
}
// - hero

//  + figure 
let picFigure = document.querySelectorAll(`.pic-Figure`);
let arrwoSec2L = document.querySelector(`.arrwoSec2.l`);
let arrwoSec2R = document.querySelector(`.arrwoSec2.r`);
let index = 0;
let numImg ;

  if(this.window.innerWidth>1300){
    numImg=4;
  }else if(this.window.innerWidth<=1300 && this.window.innerWidth>772){
    numImg=6;
  }else if(this.window.innerWidth<=772){
    numImg=7;
  }

  picFigure.forEach(function (e, i) {
    e.classList.add("d-none");
  });
  switch(numImg){
    case 4 : picFigure.forEach(function (e, i) {
      if (i == index + 0) e.classList.remove("d-none");
      if (i == index + 1) e.classList.remove("d-none");
      if (i == index + 2) e.classList.remove("d-none");
      if (i == index + 3) e.classList.remove("d-none");
    });
    break ;
    case 6 : picFigure.forEach(function (e, i) {
      if (i == index + 0) e.classList.remove("d-none");
      if (i == index + 1) e.classList.remove("d-none");
    });
    break ;
    case 7 : picFigure.forEach(function (e, i) {
      if (i == index + 0) e.classList.remove("d-none");
    });
    break ;
  }

  window.addEventListener("resize", function(){
    if(this.window.innerWidth>1300){
      numImg=4;
    }else if(this.window.innerWidth<=1300 && this.window.innerWidth>772){
      numImg=6;
    }else {
      numImg=7;
    }
    picFigure.forEach(function (e, i) {
      e.classList.add("d-none");
    });
    switch(numImg){
      case 4 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
        if (i == index + 1) e.classList.remove("d-none");
        if (i == index + 2) e.classList.remove("d-none");
        if (i == index + 3) e.classList.remove("d-none");
      });
      break ;
      case 6 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
        if (i == index + 1) e.classList.remove("d-none");
      });
      break ;
      case 7 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
      });
      break ;
    }
  });

  arrwoSec2R.addEventListener("click", function () {
    if (index == picFigure.length-4) {
      index = 0;
    }
    picFigure.forEach(function (e, i) {
      e.classList.add("d-none");
    });
    switch(numImg){
      case 4 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
        if (i == index + 1) e.classList.remove("d-none");
        if (i == index + 2) e.classList.remove("d-none");
        if (i == index + 3) e.classList.remove("d-none");
      });
      break ;
      case 6 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
        if (i == index + 1) e.classList.remove("d-none");
      });
      break ;
      case 7 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
      });
      break ;
    }
    index++;
  });
  
  arrwoSec2L.addEventListener("click", function () {
    if (index == 0) {
      index = picFigure.length-4;
    }
  
    picFigure.forEach(function (e, i) {
      e.classList.add("d-none");
    });
  
    switch(numImg){
      case 4 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
        if (i == index + 1) e.classList.remove("d-none");
        if (i == index + 2) e.classList.remove("d-none");
        if (i == index + 3) e.classList.remove("d-none");
      });
      break ;
      case 6 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
        if (i == index + 1) e.classList.remove("d-none");
      });
      break ;
      case 7 : picFigure.forEach(function (e, i) {
        if (i == index + 0) e.classList.remove("d-none");
      });
      break ;
    }
    index--;
  });
// - figure 

// + menu in mobile  
let dropdown = document.querySelector(`.dropdown`);
let dropdown_content = document.querySelector(`.dropdown-content`);
dropdown.addEventListener("click",()=>{
  dropdown_content.classList.toggle("d-block");
})
// - menu in mobile  
// clac funcation total
function total (){
  let totalCost = document.querySelector(`.totalCost`);
  let sumCost = 0 ;
  for(i=0 ; i<prices.length ; i++){
    sumCost+=parseFloat(prices[i].innerHTML);
  }
  totalCost.innerHTML = `${sumCost.toFixed(2)} $` ;
}

// on click btn Basket 

let Basket = document.querySelector(`.Basket`);
let basketBtn = document.querySelector(`.basketBtn`);

basketBtn.addEventListener("click" , ()=>{
  Basket.classList.toggle(`d-none`);
  let top = document.querySelector(`.topNav`);;
  top.classList.toggle("d-none");
  let r = document.querySelector(':root');
  
  if(navIndex%2==0){
    r.style.setProperty('--navColor', '#000');
    img.src = "img/header-big/logo.png";
    
  }else{
    r.style.setProperty('--navColor', '#fff');
    img.src = "img/header-big/logo.png";
  }
  navIndex++;
})

////////
let numberBasket = document.querySelector(`.numberBasket`);

numberBasket.innerHTML = localStorage.getItem("numberBaskets"); 

let divnumberBasket = document.querySelector(`.divnumberBasket`);

if(numberBasket.innerHTML==0){
  divnumberBasket.classList.add(`d-none`);
}else {
  divnumberBasket.classList.remove(`d-none`);
}


let basket = document.querySelector(`.Basket .container`);
if(localStorage.baskets){
   basket.innerHTML = localStorage.getItem("baskets");
}







let btnCloseProduct = document.querySelectorAll(`.products .btnClose`) ;
btnCloseProduct.forEach((e)=>{
  e.addEventListener("click" , ()=>{
    e.parentElement.remove()
    window.localStorage.setItem("baskets" , basket.innerHTML);
    numberBasket.innerHTML--;
    localStorage.setItem("numberBaskets" , numberBasket.innerHTML );
    let prices = document.querySelectorAll(`.Basket .price`);
    let totalCost = document.querySelector(`.totalCost`);
    let sumCost = 0 ;
    for(i=0 ; i<prices.length ; i++){
      sumCost+=parseFloat(prices[i].innerHTML);
    }
    totalCost.innerHTML = `${sumCost.toFixed(2)} $` ; 
  })
})



let counters = document.querySelectorAll(`.Basket .counter`)
let pluss = document.querySelectorAll(`.Basket .plus`)
let minuss = document.querySelectorAll(`.Basket .minus`)


let prices = document.querySelectorAll(`.Basket .price`);



pluss.forEach((e , i)=>{
  e.addEventListener("click" , ()=>{
    counters[i].innerHTML++;
    prices[i].innerHTML=90*(counters[i].innerHTML);
    total();
  })
})

minuss.forEach((e , i)=>{
  e.addEventListener("click" , ()=>{
    if(counters[i].innerHTML > 0)
    counters[i].innerHTML--;
    prices[i].innerHTML=90*(counters[i].innerHTML);
    if(counters[i].innerHTML==0){
      btnCloseProduct[i].click()
    }
    total();
  })
})

let continueShopping = document.querySelector(`.continueShopping`);
continueShopping.addEventListener("click" , ()=>{
  Basket.classList.toggle(`d-none`);
  let top = document.querySelector(`.topNav`);;
  top.classList.toggle("d-none");
  let r = document.querySelector(':root');
  
  if(navIndex%2==0){
    r.style.setProperty('--navColor', '#000');
    img.src = "img/header-big/logo.png";
    
  }else{
    r.style.setProperty('--navColor', '#fff');
    img.src = "img/header-big/logo.png";
  }
  navIndex++;
  
})

total();