// Function to generate a random hex color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create color boxes
function createColorBoxes() {
    const colorGrid = document.getElementById('colorGrid');
    const numberOfColors = 20; // You can adjust this number

    for (let i = 0; i < numberOfColors; i++) {
        const color = generateRandomColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;
        
        // Add click event to copy color
        colorBox.addEventListener('click', () => {
            copyToClipboard(color);
            showCopyMessage();
        });
        
        colorGrid.appendChild(colorBox);
    }
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Color copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy color: ', err);
    });
}

// Function to show copy message
function showCopyMessage() {
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
}

// Initialize the color grid when the page loads
document.addEventListener('DOMContentLoaded', createColorBoxes); 