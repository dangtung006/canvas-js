// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     let circleCenterX = 200;
//     let circleCenterY = 150;
//     let circleRadius = 50;
//     let dragging = false;
  
//     // Function to draw the circle
//     function drawCircle(x, y, radius) {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.beginPath();
//       ctx.arc(x, y, radius, 0, 2 * Math.PI);
//       ctx.stroke();
//     }
  
//     // Event listener for mouse down on the canvas
//     canvas.addEventListener('mousedown', (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;
  
//       // Check if the mouse is within the circle's bounding box
//       const dx = mouseX - circleCenterX;
//       const dy = mouseY - circleCenterY;
//       if (Math.sqrt(dx * dx + dy * dy) <= circleRadius) {
//         dragging = true;
//       }
//     });
  
//     // Event listener for mouse move on the canvas
//     canvas.addEventListener('mousemove', (e) => {
//       if (dragging) {
//         const rect = canvas.getBoundingClientRect();
//         const mouseX = e.clientX - rect.left;
//         const mouseY = e.clientY - rect.top;
  
//         // Calculate the new radius based on the distance from the circle's center
//         const dx = mouseX - circleCenterX;
//         const dy = mouseY - circleCenterY;
//         circleRadius = Math.sqrt(dx * dx + dy * dy);
  
//         // Redraw the circle with the new radius
//         drawCircle(circleCenterX, circleCenterY, circleRadius);
//       }
//     });
  
//     // Event listener for mouse up on the canvas
//     canvas.addEventListener('mouseup', () => {
//       dragging = false;
//     });
  
//     // Initial draw of the circle
//     drawCircle(circleCenterX, circleCenterY, circleRadius);
//   });
  

// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     let startX, startY, endX, endY;
//     let drawingCircle = false;
  
//     // Function to draw a circle
//     function drawCircle(x, y, radius) {
//       ctx.beginPath();
//       ctx.arc(x, y, radius, 0, 2 * Math.PI);
//       ctx.stroke();
//     }
  
//     // Event listener for mouse down on the canvas
//     canvas.addEventListener('mousedown', (e) => {
//       const rect = canvas.getBoundingClientRect();
//       startX = e.clientX - rect.left;
//       startY = e.clientY - rect.top;
//       drawingCircle = true;
//     });
  
//     // Event listener for mouse up on the canvas
//     canvas.addEventListener('mouseup', (e) => {
//       if (drawingCircle) {
//         const rect = canvas.getBoundingClientRect();
//         endX = e.clientX - rect.left;
//         endY = e.clientY - rect.top;
  
//         // Calculate the radius of the circle from the line's endpoint
//         const dx = endX - startX;
//         const dy = endY - startY;
//         const radius = Math.sqrt(dx * dx + dy * dy);
  
//         // Draw the circle
//         drawCircle(endX, endY, radius);
  
//         drawingCircle = false;
//       }
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
 
// Vẽ 1 đường thẳng
ctx.moveTo(20, 20);         
ctx.lineTo(100, 20);
 
// Nôi tiếp là một đường cung
ctx.arcTo(150, 20, 150, 70, 50); 
 
// Tiếp theo là một đường thẳng
ctx.lineTo(150, 120);

ctx.stroke();  
  });
  
  
  
  