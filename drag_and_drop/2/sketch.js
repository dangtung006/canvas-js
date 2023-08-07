document.addEventListener('DOMContentLoaded', () => {
    const dragDiv = document.getElementById('dragDiv');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    let divOffsetX, divOffsetY;
    let isDragging = false;
  
    // Function to draw the div inside the canvas
    function drawDivInsideCanvas(x, y) {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, 50, 50);
    }
  
    // Event listeners for the drag-and-drop functionality
    dragDiv.addEventListener('dragstart', (e) => {
      divOffsetX = e.offsetX;
      divOffsetY = e.offsetY;
      isDragging = true;
    });
  
    canvas.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  
    canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      isDragging = false;
      const x = e.clientX - canvas.offsetLeft - divOffsetX;
      const y = e.clientY - canvas.offsetTop - divOffsetY;
      drawDivInsideCanvas(x, y);
    });
  
    canvas.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const x = e.clientX - canvas.offsetLeft - divOffsetX;
        const y = e.clientY - canvas.offsetTop - divOffsetY;
        drawDivInsideCanvas(x, y);
      }
    });
  });
  