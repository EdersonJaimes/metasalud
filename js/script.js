document.addEventListener('DOMContentLoaded', function() {
    const acceptCookiesButton = document.getElementById('accept-cookies');
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            document.querySelector('.cookies').style.display = 'none';
        });
    }
});
