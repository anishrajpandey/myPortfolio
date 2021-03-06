//Type the strings here
// ##########################################
const arr = [
  "Web Developer",
  "Web Designer",
  "Graphics Designer",
  "FreeLancer",
];
// #################################################
//Variable declaration
let noOfItems = arr.length;
const Home = document.getElementById("menu1");
const About = document.getElementById("menu2");
const Skill = document.getElementById("menu3");
const Contact = document.getElementById("menu4");
const menuBar = document.getElementById("navigation");
const HTML = document.getElementById("html");
const HTMLlogo = document.getElementById("htmllogo");
const Python = document.getElementById("python");
const Pythonlogo = document.getElementById("pythonlogo");
const CSS = document.getElementById("css");
const CSSlogo = document.getElementById("csslogo");
const React = document.getElementById("react");
const Reactlogo = document.getElementById("reactlogo");
const JS = document.getElementById("js");
const JSlogo = document.getElementById("jslogo");
const Github = document.getElementById("github");
const Githublogo = document.getElementById("githublogo");
const defaultText = document.getElementById("default");
let box = document.getElementById("infobox");
let quitButton = document.getElementById("quit");
let mobileMenuforHome = document.getElementById("HomeMobile");
let mobileMenuforAbout = document.getElementById("AboutMobile");
let mobileMenuforSkills = document.getElementById("SkillsMobile");
let mobileMenuforProjects = document.getElementById("ProjectsMobile");
let mobileNavBar = document.getElementsByClassName("mobileNav")[0];
let hamBurgerButton = document.getElementById("hamBurgerButton");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let shown = true;

function getOne() {
  let selected = Math.floor(Math.random() * noOfItems);
  document.querySelector("span#type").innerHTML = arr[selected];
  document.documentElement.style.setProperty(
    "--wordLength",
    arr[selected].length
  );
}

function getWidth() {
  let spanbox = document.getElementById("type");
  let width = spanbox.offsetWidth;
  width = width + "px";
  document.documentElement.style.setProperty("--spanwidth", width);
}
setInterval(getOne, 4000);
setInterval(getWidth, 4000);

function showCard() {
  if (shown) {
    box.style.display = "block";
  }
}
quitButton.onclick = () => {
  box.style.display = "none";
};
let lastscroll = 0;
window.addEventListener("scroll", () => {
  let currentscroll = Math.floor(window.scrollY);
  if (currentscroll >= 0 && currentscroll <= 400) {
    Home.style.color = "#00FFF0";
  } else {
    Home.style.color = "#fff";
  }
  if (currentscroll >= 401 && currentscroll <= 1100) {
    About.style.color = "#00FFF0";
  } else {
    About.style.color = "#fff";
  }

  if (currentscroll >= 1101 && currentscroll <= 1800) {
    Skill.style.color = "#00FFF0";
  } else {
    Skill.style.color = "#fff";
  }
  if (currentscroll >= 1801 && currentscroll <= 2264) {
    Contact.style.color = "#00FFF0";
  } else {
    Contact.style.color = "#fff";
  }
  if (currentscroll > lastscroll) {
    menuBar.style.top = "-24px";
  } else {
    menuBar.style.top = "15px";
  }
  lastscroll = currentscroll;
  let scrollPercent = Math.floor((window.scrollY / 2261) * 100);
  let scrollPercentInv = 100 - scrollPercent;
  document.documentElement.style.setProperty(
    "--scrollPercent",
    scrollPercentInv + "%"
  );
});

defaultText.style.display = "block";
HTML.style.display = "None";
React.style.display = "None";
Python.style.display = "None";
CSS.style.display = "None";
JS.style.display = "None";
Github.style.display = "None";
HTMLlogo.addEventListener("click", () => {
  console.log("clicked");
  document.documentElement.style.setProperty(
    "--AnimationForHTML",
    "HTML 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "None";
  CSS.style.display = "none";
  JS.style.display = "None";
  Github.style.display = "None";
  HTML.style.display = "Block";
  defaultText.style.display = "none";
});
CSSlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForCSS",
    "CSS 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "none";
  CSS.style.display = "block";
  JS.style.display = "None";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
JSlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForJS",
    "JS 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "none";
  CSS.style.display = "none";
  JS.style.display = "block";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Pythonlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForPYTHON",
    "PYTHON 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "BLOCK";
  CSS.style.display = "none";
  JS.style.display = "none";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Reactlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForReact",
    "REACT 1s ease-in-out forwards"
  );
  React.style.display = "block";
  Python.style.display = "none    ";
  CSS.style.display = "none";
  JS.style.display = "none";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Githublogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForGithub",
    "GITHUB 1s ease-in-out forwards"
  );
  React.style.display = "none";
  Python.style.display = "none    ";
  CSS.style.display = "none";
  JS.style.display = "none";
  Github.style.display = "block";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
document.documentElement.style.setProperty("--Success", "none");
const success = () => {
  document.documentElement.style.setProperty("--Success", "block");
};
let showmenu = true;
hamBurgerButton.addEventListener("click", () => {
  showmenu ? makecross() : makeburger();
  showmenu = !showmenu;
});
mobileMenuforHome.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
mobileMenuforAbout.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
mobileMenuforSkills.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
mobileMenuforProjects.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
const makecross = () => {
  first.style.transform = "rotate(35deg)";
  first.style.transformOrigin = "left";
  second.style.opacity = "0";
  third.style.transform = "rotate(-35deg)";
  third.style.transformOrigin = "left";
  mobileNavBar.style.left = "0";
};
const makeburger = () => {
  first.style.transform = "rotate(0deg)";
  first.style.transformOrigin = "left";
  second.style.opacity = "1";
  third.style.transform = "rotate(0deg)";
  third.style.transformOrigin = "left";
  mobileNavBar.style.left = "-100%";
};
