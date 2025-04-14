const buttons = [
    document.getElementById("perbtn1"),
    document.getElementById("perbtn2"),
    document.getElementById("perbtn3"),
    document.getElementById("perbtn4")
];

const perImg = document.getElementById("perImg");
const perName = document.getElementById("perName");

// Placeholder data for each button
const data = {
    perbtn1: {
        images: ["asset/main-gal/img1.jpeg", "asset/main-gal/img2.jpeg"],
        names: ["Father", "Mother"]
    },
    perbtn2: {
        images: ["asset/main-gal/img3.jpeg"],
        names: ["Wife"]
    },
    perbtn3: {
        images: ["asset/main-gal/img4.jpeg", "asset/main-gal/img5.jpeg", "asset/main-gal/img6.jpeg", "asset/main-gal/img16.jpeg"],
        names: ["1", "2", "3", "4"]
    },
    perbtn4: {
        images: ["asset/main-gal/img7.jpeg", "asset/main-gal/img8.jpeg", "asset/main-gal/img10.jpeg", "asset/main-gal/img9.jpeg", "asset/main-gal/img11.jpeg", "asset/main-gal/img12.jpeg", "asset/main-gal/img14.jpeg", "asset/main-gal/img13.jpeg", "asset/main-gal/img15.jpeg"],
        names: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }
};

let intervalId = null;

function setActiveButton(activeBtn) {
    buttons.forEach(btn => {
        btn.style.border = btn === activeBtn ? "2px solid red" : "2px solid black";
    });
}

function startImageAndNameCycle(images, names) {
    let index = 0;
    perImg.src = images[index];
    perName.textContent = names[index];

    clearInterval(intervalId);
    intervalId = setInterval(() => {
        index = (index + 1) % images.length;
        perImg.src = images[index];
        perName.textContent = names[index];
    }, 2500);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        setActiveButton(button);
        const id = button.id;
        startImageAndNameCycle(data[id].images, data[id].names);
    });
});

// Run perbtn1 action by default on load
window.addEventListener("DOMContentLoaded", () => {
    setActiveButton(buttons[0]);
    startImageAndNameCycle(data["perbtn1"].images, data["perbtn1"].names);
});
