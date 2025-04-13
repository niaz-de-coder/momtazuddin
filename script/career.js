const carImages = [
    'asset/main-gal/img37.jpeg',
    'asset/main-gal/img14.jpeg',
    'asset/main-gal/img20.jpeg'
  ];
  
  let currentIndex1 = 0;
  const carImg = document.getElementById('carImg');
  
  function changeCarImage() {
    // Apply blur effect
    carImg.style.filter = 'blur(8px)';
    carImg.style.transition = 'filter 0.5s';
  
    // Wait for the blur effect before changing image
    setTimeout(() => {
      currentIndex1 = (currentIndex1 + 1) % carImages.length;
      carImg.src = carImages[currentIndex1];
  
      // Unblur the image shortly after change
      setTimeout(() => {
        carImg.style.filter = 'blur(0px)';
      }, 100);
    }, 500);
  }
  
  // Start the image change loop every 3 seconds
  setInterval(changeCarImage, 4000);


  // carHeadChanger.js

// Array of texts to cycle through
const carHeadTexts = [
    "Heroic Legacy",
    "University Life",
    "Professional Life"
  ];
  
  let currentIndex2 = 0;
  
  // Function to change the text
  function changeCarHeadText() {
    const carHead = document.getElementById("carHead");
    if (carHead) {
      carHead.textContent = carHeadTexts[currentIndex2];
      currentIndex2 = (currentIndex2 + 1) % carHeadTexts.length;
    }
  }
  
  // Change text every 3 seconds
  setInterval(changeCarHeadText, 4000);
  

  // carHeadChanger.js

// Array of texts to cycle through
const carDescTexts = [
    "desc1",
    "desc2",
    "desc3"
  ];
  
  let currentIndex3 = 0;
  
  // Function to change the text
  function changeCarDescText() {
    const carDesc = document.getElementById("carDesc");
    if (carDesc) {
      carDesc.textContent = carDescTexts[currentIndex3];
      currentIndex3 = (currentIndex3 + 1) % carDescTexts.length;
    }
  }
  
  // Change text every 3 seconds
  setInterval(changeCarDescText, 4000);


  // script.js

document.addEventListener("DOMContentLoaded", function () {
    const carMorBtn = document.getElementById("carMorBtn");

    if (carMorBtn) {
        carMorBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default hyperlink behavior if needed
            window.location.href = "career.html";
        });
    } else {
        console.warn("Element with ID 'carMorBtn' not found.");
    }
});
