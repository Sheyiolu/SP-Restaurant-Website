window.onload = init;

function init() {
    var menu = document.getElementById('hamburger');
    var close = document.getElementById('exit');
    var navigate = document.getElementsByTagName('nav');

    menu.addEventListener('click', function (event) {
        navigate[0].classList.toggle('hide-desktop');
        event.preventDefault;

    })

    close.addEventListener('click', function (e) {
        navigate[0].classList.add('hide-desktop');
        event.stopPropagation;
        event.preventDefault;
    })
}