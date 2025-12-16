/* =========================
   HOME TYPING ANIMATION
========================= */
const homeText = "B.E Computer Science | Full Stack Developer";
let homeIndex = 0;
const typingElement = document.getElementById("typing");

function typeHome() {
  if (homeIndex < homeText.length) {
    typingElement.innerHTML += homeText.charAt(homeIndex);
    homeIndex++;
    setTimeout(typeHome, 60);
  }
}
typeHome();

/* =========================
   REVEAL ON SCROLL (FADE)
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


const aboutTextElement = document.querySelector(".about-text");
let aboutTyped = false;

function typeAboutText(element, text, speed = 18) {
  let i = 0;
  element.innerHTML = "";

  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.style.color = "#ff3ca6";
  cursor.style.marginLeft = "2px";
  element.appendChild(cursor);

  function typing() {
    if (i < text.length) {
      if (text[i] === "\n") {
        cursor.insertAdjacentHTML("beforebegin", "<br><br>");
      } else {
        cursor.insertAdjacentText("beforebegin", text[i]);
      }
      i++;
      setTimeout(typing, speed);
    } else {
      // ✅ HARD STOP — remove cursor + kill animation
      cursor.style.animation = "none";
      cursor.remove();
    }
  }

  typing();
}

window.addEventListener("scroll", () => {
  if (aboutTyped) return;

  const rect = aboutTextElement.getBoundingClientRect();
  if (rect.top < window.innerHeight - 120) {
    typeAboutText(
      aboutTextElement,
      "I am a passionate and detail-oriented Computer Science Engineering student with a strong interest in Full Stack Development and data-driven applications.\n\nI enjoy building user-friendly websites and solving real-world problems using modern technologies. I continuously upskill myself through projects, certifications, and self-learning.\n\nMy goal is to become a skilled Software Engineer and contribute to impactful and innovative solutions."
    );
    aboutTyped = true;
  }
});


window.addEventListener("scroll", () => {
  const rect = aboutTextElement.getBoundingClientRect();
  if (!aboutTyped && rect.top < window.innerHeight - 120) {
    typeAboutText(
      aboutTextElement,
      "I am a passionate and detail-oriented Computer Science Engineering student with a strong interest in Full Stack Development and data-driven applications.\n\nI enjoy building user-friendly websites and solving real-world problems using modern technologies. I continuously upskill myself through projects, certifications, and self-learning.\n\nMy goal is to become a skilled Software Engineer and contribute to impactful and innovative solutions."
    );
    aboutTyped = true;
  }
});

/* =========================
   PINK BACKGROUND PARTICLES
========================= */
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 50; i++) {
  const particle = document.createElement("span");
  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.top = Math.random() * 100 + "vh";
  particle.style.animationDuration = 8 + Math.random() * 12 + "s";
  particle.style.opacity = Math.random();
  const size = 4 + Math.random() * 6;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particleContainer.appendChild(particle);
}
