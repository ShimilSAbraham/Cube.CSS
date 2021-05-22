let header = document.querySelector(".header");
let logo = header.querySelector(".logo");
let content = document.querySelector(".content");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let close = nav.querySelector(".close");

// bg,nav,color,light,dark
let bg = ["#add8e6","#A4EFC1","#e6adad","#e49bc8","#e4b09b","#be8ae0","#c7c7c7"];
let navc = ["#5576da","#4eca58","#da5555","#da55ae","#da6e4d","#9a55da","#838383"];
let color = ["#1a75ff","#07ce4a","#f44336","#ff1a75","#ff9800","#8a00e6","#616161"];
let light = ["#80b3ff","#3DF57B","#ef9a9a","#ff66a3","#ffa726","#c266ff","#9e9e9e"];
let dark = ["#0052CC","#04993D","#c62828","#e6005c","#ef6c00","#5b0992","#424242"];

//  
let n = 1;

menu.addEventListener("click",function(){
    nav.style.right = "0";
})
close.addEventListener("click",function(){
    // header.style.opacity = "100%";
    // content.style.opacity = "100%";
    nav.style.right = "-50%";
})

logo.addEventListener("click", function(){
    if(n>6) n=0;
    
    document.documentElement.style.setProperty("--bg", bg[n]);
    document.documentElement.style.setProperty("--nav", navc[n]);
    document.documentElement.style.setProperty("--color", color[n]);
    document.documentElement.style.setProperty("--light", light[n]);
    document.documentElement.style.setProperty("--dark", dark[n]);

    n+=1;
})