let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form") 
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".navbar")
let vidBtn = document.querySelectorAll(".video-btn")

function showbar(){
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
}
function showform(){
    loginForm.classList.add("active")
}
function hideform(){
    loginForm.classList.remove("active")

}
function showmenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}
vidBtn.forEach(slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween :20,
    loop:true,
    autoplay:{
        delay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});
document.querySelector("#calculate-btn").addEventListener("click", function() {
    let amount = document.querySelector("#amount").value;
    fetch("https://api.currencyfreaks.com/latest?apikey=9d8a3c9b23044cb287a7c5dff6481974")
      .then((result) => {
        return result.json();
      })
      .then((currency) => {
        let egpPrice = document.querySelector(".egp span  ");
        let UKPrice = document.querySelector(".london span  ");
        let KPWPrice = document.querySelector(".korea span  ");
        let JPYPrice = document.querySelector(".japan span  ");
  
        egpPrice.innerHTML = Math.round(amount * currency.rates["EGP"]);
        UKPrice.innerHTML = Math.round(amount * currency.rates["GBP"]);
        KPWPrice.innerHTML = Math.round(amount * currency.rates["KPW"]);
        JPYPrice.innerHTML = Math.round(amount * currency.rates["JPY"]);
      });
  });
  


