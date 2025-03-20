const names = ["Professor ", "Dramatist ", "Writer ", "Actor "];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 2000;
const proNamesElement = document.getElementById("proNames");

function typeEffect() {
    if (!proNamesElement) return;
    const currentName = names[nameIndex];
    
    if (isDeleting) {
        proNamesElement.textContent = currentName.substring(0, charIndex--);
    } else {
        proNamesElement.textContent = currentName.substring(0, charIndex++);
    }
    
    let speed = isDeleting ? erasingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentName.length) {
        isDeleting = true;
        speed = delayBetweenWords;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
    }
    
    setTimeout(typeEffect, speed);
}

typeEffect();

document.addEventListener('DOMContentLoaded', function() {
    const galMoreBtn = document.getElementById('galMoreBtn');
    if (galMoreBtn) {
        galMoreBtn.addEventListener('click', function() {
            window.location.href = 'gallery.html';
        });
    }
});