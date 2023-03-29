// skapa Ref till html dokument
let menuIcon = document.querySelector('#js-menu-toggle');
let menuList = document.querySelector('#js-menu');

// lägga på lyssnare på menuicon som lyssnar efter click
menuIcon.addEventListener('click', function () {
    // vad ska hända när jag klickar på menuIcon
    console.log('Du klickade på menu');
    // lägga på en klass på menuList
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('exit');
});

