/* ============================================
   SCRIPT PRINCIPAL - FUNCIONALIDADES
   ============================================ */

/* Datos de los integrantes del equipo */
const members = [
    {
        name: "Gael",
        description: "Apasionado por el desarrollo web y la programación. Especializado en JavaScript y diseño responsivo. Le encanta crear interfaces creativas y funcionales.",
        photo: "imagenes/foto_gael.jpg"
    },
    {
        name: "Luis",
        description: "Experto en bases de datos y backend. Conocimientos profundos en PHP y arquitectura de aplicaciones. Enfocado en la calidad y eficiencia del código.",
        photo: "imagenes/foto_luis.jpg"
    }
];

/* Colores para el ciclo de cambio de fondo */
const backgroundColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",  /* Púrpura */
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",  /* Rosa-Rojo */
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",  /* Azul-Cian */
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",  /* Verde-Turquesa */
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",  /* Naranja-Amarillo */
];

/* Variables de control */
let currentColorIndex = 0;    /* Índice del color actual */
let currentMemberIndex = 0;   /* Índice del integrante actual */

/* ============================================
   FUNCIÓN: Cambiar color de fondo
   ============================================ */
function changeBackgroundColor() {
    // Obtener el siguiente color en el ciclo
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    
    // Aplicar el nuevo color de fondo con transición
    document.body.style.background = backgroundColors[currentColorIndex];
}

/* ============================================
   FUNCIÓN: Cambiar integrante mostrado
   ============================================ */
function changeMember() {
    // Obtener el siguiente integrante en el ciclo
    currentMemberIndex = (currentMemberIndex + 1) % members.length;
    
    // Obtener datos del integrante actual
    const member = members[currentMemberIndex];
    
    // Actualizar la imagen del integrante
    document.getElementById("memberPhoto").src = member.photo;
    document.getElementById("memberPhoto").alt = `Foto de ${member.name}`;
    
    // Actualizar el nombre del integrante
    document.getElementById("memberName").textContent = member.name;
    
    // Actualizar la descripción del integrante
    document.getElementById("memberDescription").textContent = member.description;
}

/* ============================================
   EVENTOS: Click en los botones
   ============================================ */
// Evento para el botón de cambio de color
document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);

// Evento para el botón de cambio de integrante
document.getElementById("memberButton").addEventListener("click", changeMember);

/* ============================================
   INICIALIZACIÓN
   ============================================ */
// Mostrar el primer integrante cuando la página carga
window.addEventListener("DOMContentLoaded", function() {
    changeMember();
});
