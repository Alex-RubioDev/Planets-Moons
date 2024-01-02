// menús hamburguesa

// JavaScript para manejar el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle.nav2-toggle');
    var nav1 = document.querySelector('.nav1 ul');
    var nav2 = document.querySelector('.nav2 ul');

    menuToggle.addEventListener('click', function () {
        toggleMenu(nav2); // Cambiar a nav2 en lugar de nav1
    });

    function toggleMenu(menu) {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }
});


// Agregar un evento de clic a los enlaces después de cargar la página //
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.enlace-seccion').forEach(function (enlace) {
                enlace.addEventListener('click', function (event) {
                    // Previene el comportamiento predeterminado del enlace
                    event.preventDefault();

                    // Obtiene el valor del atributo data-target
                    var target = this.getAttribute('data-target');
                    // Encuentra el elemento con la clase correspondiente y desplázate hacia él
                    var seccion = document.querySelector('.' + target);
                    if (seccion) {
                        seccion.scrollIntoView({ behavior: 'smooth' });
                    }
                })
            })
        });

        // Button "Moons".

        document.addEventListener("DOMContentLoaded", function () {
            // Seleccionar el enlace "Moons"
            var moonsLink = document.querySelector('.nav1 ul li:nth-child(2) a');
        
            // Agregar un evento de clic al enlace "Moons"
            moonsLink.addEventListener('click', function (event) {
                // Previener el comportamiento predeterminado del enlace
                event.preventDefault();
        
                // Llamar a la función mostrarLunas para cada planeta
                mostrarLunas('mercurio');
                mostrarLunas('venus');
                mostrarLunas('tierra');
                mostrarLunas('marte');
                mostrarLunas('jupiter');
                mostrarLunas('saturno');
                mostrarLunas('urano');
                mostrarLunas('neptuno');
            });
        
            document.querySelectorAll('.enlace-seccion').forEach(function (enlace) {
                enlace.addEventListener('click', function (event) {
                    event.preventDefault();
        
                    // Obtiene el valor del atributo data-target
                    var target = this.getAttribute('data-target');
                    // Encuentra el elemento con la clase correspondiente y desplázate hacia él
                    var seccion = document.querySelector('.' + target);
                    if (seccion) {
                        seccion.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });
        
        // Alerta email: 

        document.getElementById('copiarEmail').addEventListener('click', function () {
            var email = this.alt;  // Obtiene la dirección de correo electrónico del atributo "alt"
            alert('Mi dirección de correo electrónico es: ' + email);
        });

