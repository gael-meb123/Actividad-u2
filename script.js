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
const backgroundThemes = [
    {
        name: "morado",
        value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        name: "rosa",
        value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        name: "azul",
        value: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        name: "verde",
        value: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        name: "naranja",
        value: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
];

const fontModes = [
    {
        className: "",
        label: "Texto normal"
    },
    {
        className: "font-mode-1",
        label: "Texto grande y negrita"
    },
    {
        className: "font-mode-2",
        label: "Texto grande e itálico"
    }
];

/* Variables de control */
let currentColorIndex = 0;    /* Índice del color actual */
let currentMemberIndex = 0;   /* Índice del integrante actual */
let currentFontModeIndex = 0; /* Índice del modo de fuente */

function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    document.getElementById("dateTimeMessage").textContent = `Fecha y hora actual: ${formatted}`;
}

function updateColorButtonText() {
    const nextColorIndex = (currentColorIndex + 1) % backgroundThemes.length;
    const nextColorName = backgroundThemes[nextColorIndex].name;
    document.getElementById("colorButton").textContent = `Pasar al color ${nextColorName}`;
}

function updateFontButtonText() {
    const nextFontModeIndex = (currentFontModeIndex + 1) % fontModes.length;
    const nextLabel = fontModes[nextFontModeIndex].label;
    document.getElementById("fontButton").textContent = `Cambiar a: ${nextLabel}`;
}

/* ============================================
   FUNCIÓN: Cambiar color de fondo
   ============================================ */
function changeBackgroundColor() {
    // Obtener el siguiente color en el ciclo
    currentColorIndex = (currentColorIndex + 1) % backgroundThemes.length;
    
    // Aplicar el nuevo color de fondo con transición
    document.body.style.background = backgroundThemes[currentColorIndex].value;

    // Actualizar el texto para mostrar cuál es el siguiente color
    updateColorButtonText();
}

function changeTypography() {
    currentFontModeIndex = (currentFontModeIndex + 1) % fontModes.length;

    // Limpiar primero todas las clases de modo tipográfico
    document.body.classList.remove("font-mode-1", "font-mode-2");

    const selectedMode = fontModes[currentFontModeIndex];
    if (selectedMode.className) {
        document.body.classList.add(selectedMode.className);
    }

    updateFontButtonText();
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

function renderCurrentMember() {
    const member = members[currentMemberIndex];
    document.getElementById("memberPhoto").src = member.photo;
    document.getElementById("memberPhoto").alt = `Foto de ${member.name}`;
    document.getElementById("memberName").textContent = member.name;
    document.getElementById("memberDescription").textContent = member.description;
}

/* ============================================
   EVENTOS: Click en los botones
   ============================================ */
// Evento para el botón de cambio de color
document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);

// Evento para el botón de cambio de tipografía
document.getElementById("fontButton").addEventListener("click", changeTypography);

// Evento para el botón de cambio de integrante
document.getElementById("memberButton").addEventListener("click", changeMember);

/* ============================================
   INICIALIZACIÓN
   ============================================ */
// Mostrar el primer integrante cuando la página carga
window.addEventListener("DOMContentLoaded", function() {
    renderCurrentMember();
    updateDateTime();
    updateColorButtonText();
    updateFontButtonText();

    // Actualizar reloj cada segundo
    setInterval(updateDateTime, 1000);
});
