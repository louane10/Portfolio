// menu de nav 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
};

// Menu de nav sur le côté
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
};

// La barre de nav sur le coté se ferme lorsqu'on clique sur un lien
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

document.querySelector("#contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
  
    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
  
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    }
  });