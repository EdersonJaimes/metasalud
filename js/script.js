document.addEventListener('DOMContentLoaded', function() {
    const acceptCookiesButton = document.getElementById('accept-cookies');
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            document.querySelector('.cookies').style.display = 'none';
        });
    }
});
let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    if (n >= 4) index = 0;
    if (n < 0) index = slides.length - 1;

    for (let slide of slides) {
        slide.style.transform = `translateX(-${index * 100}%)`;
    }
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

// slide inicial
showSlide(index);

//proximo slide
setInterval(nextSlide, 8000);
