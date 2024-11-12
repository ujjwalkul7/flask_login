document.addEventListener('DOMContentLoaded', function() {
    const designMenu = document.querySelector('nav ul li:nth-child(2)');
    const dropdown = designMenu.querySelector('.dropdown');

    // Show dropdown on hover
    designMenu.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
    });

    // Hide dropdown when not hovering
    designMenu.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    });
});

// JavaScript to handle image hover popup
const figures = document.querySelectorAll('.hover-popup');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

figures.forEach(figure => {
    figure.addEventListener('mouseover', function() {
        const hdImageSrc = this.querySelector('img').getAttribute('data-hd');
        popupImg.src = hdImageSrc;
        popup.style.display = 'block';
        const rect = this.getBoundingClientRect();
        popup.style.left = `${rect.left}px`;
        popup.style.top = `${rect.top + window.scrollY + rect.height}px`;
    });

    figure.addEventListener('mouseout', function() {
        popup.style.display = 'none';
    });
});

let area = 0; // Variable to store calculated area

// Function to calculate area
function calculateArea() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);

  if (!isNaN(length) && !isNaN(width)) {
    area = length * width; // Calculate area
    document.getElementById('calculatedArea').innerText = area.toFixed(2); // Display area
    calculateTotalCost(); // Update total cost when area changes
  } else {
    document.getElementById('calculatedArea').innerText = '0';
  }
}

// Event listeners for live calculations
document.getElementById('length').addEventListener('input', calculateArea);
document.getElementById('width').addEventListener('input', calculateArea);

// Function to calculate the total estimated cost
function calculateTotalCost() {
  const costPerSqft = parseFloat(document.getElementById('type').value); // Get the cost per sq ft based on selected type
  const floors = parseInt(document.getElementById('floors').value);

  // Calculate total cost using the area from the area calculator
  const totalCost = area * costPerSqft * floors;

  // Display the total cost
  document.getElementById('totalCost').innerText = totalCost.toFixed(2);
}
