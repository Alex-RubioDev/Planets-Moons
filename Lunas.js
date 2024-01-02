
let clicsMarte = 0;
let clicsJupiter = 0;
let clicsSaturno = 0;
let clicsUrano = 0;
let clicsNeptuno = 0;


function mostrarLunas(planeta) {
    // Obtén el contenedor de lunas
    const lunasContainer = document.getElementById('lunas-container');

    // Limpia el contenedor
    lunasContainer.innerHTML = '';

    // Define un objeto con las imágenes de las lunas para cada planeta
    const lunas = {
        tierra:["Moon.png"],
        marte:["Fobos.png", "deimos.png"],
        jupiter:["Europe.png", "Io.png", "Ganimedes.png", "Callisto.png"],
        saturno: ["Titan.png", "Enceladus.png", "Japetus.png", "Mimas.png", "Hyperion.png", "Tethys.png"],
        urano: ["Titania.png", "Miranda.png", "Oberon.png", "Umbriel.png", "Ariel.png", "Puck.png"],
        neptuno: ["Triton.png"]
        // Agrega más planetas y sus lunas según sea necesario
    };

    // Obtén las imágenes de las lunas para el planeta actual
    const imagenesLunas = lunas[planeta] || [];

    // Reemplaza la imagen de la Tierra con la imagen de la luna si es el planeta Tierra
    if (planeta === 'tierra') {
        const planetaTierra = document.querySelector('.planeta.tierra img');
        if (planetaTierra) {
            planetaTierra.src = imagenesLunas[0]; // Asumes que solo hay una imagen de la luna
        }
    }

    if (planeta === 'marte') {
        const planetaMarte = document.querySelector('.planeta.marte img');
        if (planetaMarte) {
            // Verifica si aún hay lunas por mostrar
            if (clicsMarte < imagenesLunas.length) {
                planetaMarte.src = imagenesLunas[clicsMarte];
                clicsMarte++;  // Incrementa el contador de clics en Marte
            } else {
                // Reinicia el contador si ya se mostraron todas las lunas
                clicsMarte = 0;
            }
        }
    }

    if (planeta === 'jupiter') {
        const planetaJupiter = document.querySelector('.planeta.jupiter img');
        if (planetaJupiter) {
            // Verifica si aún hay lunas por mostrar
            if (clicsJupiter < imagenesLunas.length) {
                planetaJupiter.src = imagenesLunas[clicsJupiter];
                clicsJupiter++;  // Incrementa el contador de clics en Jupiter
            } else {
                // Reinicia el contador si ya se mostraron todas las lunas
                clicsJupiter = 0;
            }
        }
    }

    if (planeta === 'saturno') {
        const planetaSaturno = document.querySelector('.planeta.saturno img');
        if (planetaSaturno) {
            // Verifica si aún hay lunas por mostrar
            if (clicsSaturno < imagenesLunas.length) {
                planetaSaturno.src = imagenesLunas[clicsSaturno];
                clicsSaturno++;  // Incrementa el contador de clics en Saturno
                // Reinicia el contador si ya se mostraron todas las lunas
                planetaSaturno.style.width = '250px';
                planetaSaturno.style.height = '250px';
            } else {
                // Reinicia el contador si ya se mostraron todas las lunas
                clicsSaturno = 0;
            }
        }
    }

    if (planeta === 'urano') {
        const planetaUrano = document.querySelector('.planeta.urano img');
        if (planetaUrano) {
            // Verifica si aún hay lunas por mostrar
            if (clicsUrano < imagenesLunas.length) {
                planetaUrano.src = imagenesLunas[clicsUrano];
                clicsUrano++;  // Incrementa el contador de clics en Urano
            } else {
                // Reinicia el contador si ya se mostraron todas las lunas
                clicsUrano = 0;
            }
        }
    }

    if (planeta === 'neptuno') {
        const planetaNeptuno = document.querySelector('.planeta.neptuno img');
        if (planetaNeptuno) {
            // Verifica si aún hay lunas por mostrar
            if (clicsNeptuno < imagenesLunas.length) {
                planetaNeptuno.src = imagenesLunas[clicsNeptuno];
                clicsNeptuno++;  // Incrementa el contador de clics en Neptuno
            } else {
                // Reinicia el contador si ya se mostraron todas las lunas
                clicsNeptuno = 0;
            }
        }
    }

    // Muestra el contenedor de lunas con la animación
    lunasContainer.style.display = 'block';
    lunasContainer.classList.remove('oculto');
}

