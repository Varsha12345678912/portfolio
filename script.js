let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

document.oncontextmenu = () => {
  return false;
}

document.onkeydown = e =>{
  if(e.key == "F12"){
    return false;
  }
  if(e.ctrlKey && e.key == "u"){
    return false;
  }
  if(e.ctrlKey && e.key == "c"){
    return false;
  }
  if(e.ctrlKey && e.key =="v"){
    return false;
  }
}


// contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Simulate form submission process (e.g., form data validation)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    // Show success alert
    const alertBox = document.getElementById('alertBox');
    alertBox.style.display = 'block';
    alertBox.classList.add('show'); // Show Bootstrap alert with animation
  } else {
    // Show error alert
    const errorBox = document.getElementById('errorBox');
    errorBox.style.display = 'block';
    errorBox.classList.add('show'); // Show Bootstrap alert with animation
  }

  // Clear the form after submission
  document.getElementById('contactForm').reset();
});

