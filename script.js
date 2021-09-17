//Type the strings here
// ##########################################
const arr=["Student","Web Developer","Web Designer"];
// #################################################
//Variable declaration
let noOfItems=arr.length;
const Home=document.getElementById("menu1");
const About=document.getElementById("menu2");
const Skill=document.getElementById("menu3");
const Contact=document.getElementById("menu4");
const menuBar=document.getElementById("navigation");

function getOne(){
    let selected=Math.floor(((Math.random()*noOfItems)));
    document.querySelector("span#type").innerHTML=arr[selected];
    document.documentElement.style.setProperty("--wordLength",arr[selected].length);
}


function getWidth(){
    let spanbox=document.getElementById("type");
    let width=spanbox.offsetWidth;
    width=width+"px";
    document.documentElement.style.setProperty("--spanwidth",width);
}
setInterval(getOne,4000);
setInterval(getWidth, 4000);
function showCard(){
   let box= document.getElementById('infobox');
   box.style.left="50px";
}   
function hideCard(){

   let box= document.getElementById('infobox');
   box.style.left="-400px";
}

document.getElementById("logo").onmouseover=()=>{showCard();}
document.getElementById("logo").addEventListener("mouseout",hideCard);
let lastscroll=0;
window.addEventListener('scroll',()=>{
    
    let currentscroll=Math.floor(window.scrollY);
    if(currentscroll>=0 && currentscroll<=400){
        Home.style.color="#00FFF0";
    }
    else{
        Home.style.color="#fff"; 
    }
    if(currentscroll>=401 && currentscroll<=1100){
        About.style.color="#00FFF0";
    }
    else{
        About.style.color="#fff"; 
    }
    
    if(currentscroll>=1101 && currentscroll<=1800){
        Skill.style.color="#00FFF0";
    }
    else{
        Skill.style.color="#fff"; 
    }
    if(currentscroll>=1801 && currentscroll<=2264){
        Contact.style.color="#00FFF0";
    }
    else{
        Contact.style.color="#fff"; 
    }
    if(currentscroll>lastscroll){
        menuBar.style.top="-24px"
        
    }
    else{
        menuBar.style.top="15px"

    }
    lastscroll=currentscroll;
    let scrollPercent=Math.floor((window.scrollY/2261)*100);
    let scrollPercentInv=100-scrollPercent;
    document.documentElement.style.setProperty("--scrollPercent",scrollPercentInv+"%");
})
function showContactCard(){
  let email=prompt("enter your email",'example@gmail.com');
  console.log(email);
}

