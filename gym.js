// JavaScript for the 3D hover effect based on cursor movement
document.querySelectorAll('.cards').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const { offsetWidth: width, offsetHeight: height } = card;
      const { offsetX: x, offsetY: y } = e;
  
      // Calculate the center of the card
      const xCenter = width / 2;
      const yCenter = height / 2;
  
      // Get the distance from the center of the card
      const xAxis = (yCenter - y) / 10;
      const yAxis = (x - xCenter) / 10;
  
      // Apply the 3D rotation effect
      card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
    });
  
    // Reset the card back to its original state when the mouse leaves
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
  


const facilitiesLink = document.getElementById("facilities");
const page2 = document.getElementById("page2");


facilitiesLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Scroll to the page2 section smoothly
    page2.scrollIntoView({
        behavior: "smooth", 
        block: "start"      
    });
});

const membershipLink = document.getElementById("membership");
const page4 = document.getElementById("page4");


membershipLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Scroll to the page2 section smoothly
    page4.scrollIntoView({
        behavior: "smooth", 
        block: "start"      
    });
});

const getstartedLink = document.getElementById("getstarted");
getstartedLink.addEventListener("click", function(event) {
    event.preventDefault();         
    
    // Scroll to the page2 section smoothly
    page4.scrollIntoView({
        behavior: "smooth", 
        block: "start"      
    });
});


const aboutLink = document.getElementById("about");
const page5 = document.getElementById("page5");


membershipLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Scroll to the page2 section smoothly
    page5.scrollIntoView({
        behavior: "smooth", 
        block: "start"      
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const subColumns = document.querySelectorAll('.sub-column');
    subColumns.forEach((subColumn) => {
        subColumn.addEventListener('mouseenter', function() {
            this.style.transform = "scale(1.1)";
        });
        subColumn.addEventListener('mouseleave', function() {
            this.style.transform = "scale(1)";
        });
    });
});

