function openNav() {
document.getElementById("mySidebar").style.width = "320%";
document.getElementById("mySidebar").style.height = "100%";
document.getElementById("main").style.marginright = "50%";
}
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("mySidebar").style.height="0";
document.getElementById("main").style.marginright = "0";
}
setInterval(mt,1000);
function mt(){
let mytime=new Date;
document.getElementById("time").innerHTML=mytime;
}

let display=document.getElementById("list1");
display.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.7)'; 
 
    });
    display.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
 });
let display2=document.getElementById("list2");
display2.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.7)'; 
 
    });
    display2.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
 });
let display3=document.getElementById("list3");
display3.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.7)'; 
 
    });
    display3.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
 });
 const sign_in_btn = document.querySelector("#sign-in-btn");
 const sign_up_btn = document.querySelector("#sign-up-btn");
 const container = document.querySelector(".container");
 
 sign_up_btn.addEventListener("click", () => {
   container.classList.add("sign-up-mode");
 });
 
 sign_in_btn.addEventListener("click", () => {
   container.classList.remove("sign-up-mode");
 });
