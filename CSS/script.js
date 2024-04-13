// Selecciona todas las cajas
const boxes = document.querySelectorAll('.box');

// Función para agregar la clase de hover
function addHoverClass(event) {
    event.target.classList.add('box-hovered');
}

// Función para remover la clase de hover
function removeHoverClass(event) {
    event.target.classList.remove('box-hovered');
}

// Agrega los event listeners a cada caja
boxes.forEach(box => {
    box.addEventListener('mouseover', addHoverClass);
    box.addEventListener('mouseout', removeHoverClass);
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las cajas
    const boxes = document.querySelectorAll('.box');

    // Aplica la animación a cada caja cuando el mouse se coloca sobre ella
    boxes.forEach(function(box) {
        box.addEventListener('mouseover', function() {
            this.style.animation = 'boxGrow 0.3s ease-in-out';
        });

        // Restaura el tamaño original cuando el mouse se retira
        box.addEventListener('mouseout', function() {
            this.style.animation = '';
        });
    });
});