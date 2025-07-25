/*Nav section */


document.addEventListener("DOMContentLoaded", function () {
const icon = document.querySelector(".icon i")
const sidenav = document.querySelector(".sidenav")
console.log("Icon click listener added");
icon.addEventListener("click", function () {
    console.log("Icon clicked");
    sidenav.classList.toggle("active");
});

const sidenavLinks = document.querySelectorAll(".sidenavlinks a");

sidenavLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidenav.classList.remove("active");
  });
});
});


// Buttons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

// Skill sections
const frontend = document.querySelector(".frontend");
const framework = document.querySelector(".framework");
const version = document.querySelector(".version"); 
const designing = document.querySelector(".designing");

// Helper function to hide all skill sections
function hideAll() {
    frontend.style.display = "none";
    framework.style.display = "none";
    version.style.display = "none";
    designing.style.display = "none";
}

// Show frontend skills
btn1.addEventListener("click", () => {
    hideAll();
    frontend.style.display = "block";
});

// Show framework skills
btn2.addEventListener("click", () => {
    hideAll();
    framework.style.display = "block";
});

// Show version control skills
btn3.addEventListener("click", () => {
    hideAll();
    version.style.display = "block";
});

// Show designing skills
btn4.addEventListener("click", () => {
    hideAll();
    designing.style.display = "block";
});

function showSkill(skillClass) {
    const sections = document.querySelectorAll('.skill-section');
    sections.forEach(section => section.style.display = 'none');

    const toShow = document.querySelector(`.${skillClass}`);
    if (toShow) {
        toShow.style.display = 'flex'; // Use flex to align icons
    }
}
