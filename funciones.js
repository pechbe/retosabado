var menuOpenPopup = document.getElementById('open-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnClosePopup = document.getElementById('btn-cerrar-popup');

    menuOpenPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    });
    
    btnClosePopup.addEventListener('click', function(e){
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });