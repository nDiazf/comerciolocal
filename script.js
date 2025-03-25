// Crear un botón
const boton = document.createElement("button");
// Texto visible en el botón
boton.textContent = "Abrir otra página";
// Vincular al archivo CSS
boton.classList.add("boton-estilizado"); 

// Agregar evento de clic para abrir la segunda página "galería":
boton.addEventListener("click", function() {
// Abrirla en una nueva pestaña
    window.open("galeria.html", "_blank");
});
// Agregar el botón en la parte inferior de la página web
document.body.appendChild(boton);



// Coordenadas de tu negocio
const latNegocio = 40.412842;
const lonNegocio = -4.497292;

// Crea el mapa y lo centra en la ubicación del negocio
const map = L.map('map').setView([latNegocio, lonNegocio], 15);

// Incluimos el OpenStreetMap a la página web
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Señala la ubicación del negocio
L.marker([latNegocio, lonNegocio])
    .addTo(map)
    .bindPopup("<b>Nombre de tu negocio local</b><br>Estamos aquí.")
    .openPopup();

// Ubicación actual del cliente
function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // Mostrar la ubicación en el mapa
                map.setView([lat, lon], 15);

                // Agregar un marcador con la ubicación del usuario
                L.marker([lat, lon])
                    .addTo(map)
                    .bindPopup("Tu ubicación actual")
                    .openPopup();

                document.getElementById("info").innerText = `Tu ubicación: Latitud ${lat}, Longitud ${lon}`;
            },
            function(error) {
                document.getElementById("info").innerText = "No se pudo obtener la ubicación.";
            }
        );
    } else {
        document.getElementById("info").innerText = "Tu navegador no soporta geolocalización.";
    }
}