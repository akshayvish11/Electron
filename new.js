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
let display=document.getElementById("box1");
let listhover=document.getElementById("list1");
display.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.4)'; 
     document.getElementById("title1").style.display='block'; 
     document.getElementById("remove").style.display='none'; 
    
    });
    display.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("remove").style.display='block'; 
        document.getElementById("title1").style.display='block'; 
 });
 listhover.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.4)';
     document.getElementById("remove").style.display='none'; ; 
    });
    listhover.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("remove").style.display='block';
    });
let display2=document.getElementById("box2");
let listhover2=document.getElementById("list2");
display2.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.4)'; 
     document.getElementById("title2").style.display='block'; 
     document.getElementById("remove2").style.display='none'; 
    
    });
    display2.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("remove2").style.display='block'; 
        document.getElementById("title2").style.display='block'; 
 });
 listhover2.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.4)';
     document.getElementById("remove2").style.display='none'; 
    });
    listhover2.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("remove2").style.display='block';
    });
let display3=document.getElementById("box3");
let listhover3=document.getElementById("list3");
display3.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.4)'; 
     document.getElementById("title3").style.display='block'; 
     document.getElementById("remove3").style.display='none'; 
    
    });
    display3.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("remove3").style.display='block'; 
        document.getElementById("title3").style.display='block'; 
 });
 listhover3.addEventListener("mouseover",function(){
     document.getElementById("body").style.backgroundColor='rgba(0, 0, 0, 0.4)';
     document.getElementById("remove3").style.display='none'; 
    });
    listhover3.addEventListener("mouseout",function(){
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("remove3").style.display='block';
    });
 