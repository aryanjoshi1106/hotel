// nav hide

let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click" , function(){
        navcollapse.classList.remove("show");
    })
})



 //  active navbar
 var nav = document.querySelector(".naigation-wrap");
 window.onscroll = function ()  {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
 }


 //navbar
 var nav = document.querySelector(",navigation-wrap");
 window.onscroll = function () {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
 }





    document.addEventListener("DOMContentLoaded", () => {
      function counter(id, start, end , duration){
  let obj = document.getElementById(id),
      current = start,
  range = end - start,
  increment = end > start ? 1 : -1,
  Step = Math.abs(Math.floor(duration / range)),
  timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if(current == end){
          clearInterval(timer);
      }
  },Step);
}
counter("count-1",0,1287,3000);
counter("count2",100,5098, 2500);
counter("count3",0,1440 , 3000);
counter("count4",0,7110 , 3000);
    });
 




