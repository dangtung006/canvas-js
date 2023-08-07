// Get references to the draggable element and the canvas
const draggable = document.getElementById('draggable');
const canvas = document.getElementById('canvas');

// Add an event listener for when the user starts dragging the element
draggable.addEventListener('mousedown', function (e) {
    e.preventDefault(); // Prevent default browser behavior

    const offsetX = e.clientX - draggable.offsetLeft;
    const offsetY = e.clientY - draggable.offsetTop;

    // Add an event listener for when the user moves the mouse while dragging the element
    document.addEventListener('mousemove', moveElement);

    // Add an event listener for when the user releases the mouse button, to stop dragging
    document.addEventListener('mouseup', function stopDragging() {
        document.removeEventListener('mousemove', moveElement);
        document.removeEventListener('mouseup', stopDragging);
    });

    // Function to move the element based on mouse position
    function moveElement(e) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Make sure the element is within the canvas boundaries
        if (x >= 0 && x <= canvas.width - draggable.clientWidth && y >= 0 && y <= canvas.height - draggable.clientHeight) {
            draggable.style.left = x + 'px';
            draggable.style.top = y + 'px';
        }
    }
});
