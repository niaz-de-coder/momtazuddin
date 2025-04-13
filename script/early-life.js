// script.js

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".el-box-4");
  
    elements.forEach(function (element) {
      element.addEventListener("click", function () {
        window.location.href = "early-life.html";
      });
    });
  });
  