document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const imgDivs = document.querySelectorAll('.gal-img-div');

    imgDivs.forEach(div => {
        div.addEventListener('click', function() {
            const img = div.querySelector('img');
            if (img) {
                const imgSrc = img.src;
                const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.innerHTML = `
                    <div class="popup-content">
                        <img src="${imgSrc}" alt="Popup Image">
                        <a href="${imgSrc}" download class="download-btn">Download</a>
                        <span class="close-btn">&times;</span>
                    </div>
                `;
                document.body.appendChild(popup);

                const closeBtn = popup.querySelector('.close-btn');
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(popup);
                });
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const imgOpt = document.getElementById('imgOpt');
    const vidOpt = document.getElementById('vidOpt');

    if (imgOpt) {
        imgOpt.addEventListener('click', function() {
            window.location.href = 'gal-img.html';
        });
    }

    if (vidOpt) {
        vidOpt.addEventListener('click', function() {
            window.location.href = 'gal-vid.html';
        });
    }
});