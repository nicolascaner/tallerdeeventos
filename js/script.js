document.addEventListener('DOMContentLoaded', function() {
    const divBtn = document.getElementById('div_btn');
    const boton = divBtn.querySelector('#btn');

    boton.addEventListener('click', function(){
        alert('Hola!, soy el div');
    });
});

