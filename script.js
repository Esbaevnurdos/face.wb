// Get all images
const images = document.querySelectorAll('.hover-image');

// Define unique hover URL sets for each image position
const hoverUrls = {
  "left-top": [
    'center.jpg', 'left.jpg', 'left.jpg',
    'top.jpg', 'left-top.jpg', 'left-top.jpg',
    'top.jpg', 'left-top.jpg', 'left-top.jpg'
  ],
  "center-top": [
    'right.jpg', 'center.jpg', 'left.jpg',
    'right-top.jpg', 'top.jpg', 'left-top.jpg',
    'right-top.jpg', 'top.jpg', 'left-top.jpg'
  ],
  "right-top": [
    'right.jpg', 'right.jpg', 'center.jpg',
    'right-top.jpg', 'right-top.jpg', 'top.jpg',
    'right-top.jpg', 'right-top.jpg', 'top.jpg'
  ],
  "left-middle": [
    'bottom.jpg', 'left-bottom.jpg', 'left-bottom.jpg',
    'center.jpg', 'left.jpg', 'left.jpg',
    'top.jpg', 'left-top.jpg', 'left-top.jpg'
  ],
  "center-center": [
    'right-bottom.jpg', 'bottom.jpg', 'left-bottom.jpg',
    'right.jpg', 'center.jpg', 'left.jpg',
    'right-top.jpg', 'top.jpg', 'left-top.jpg'
  ],
  "right-middle": [
    'right-bottom.jpg', 'right-bottom.jpg', 'bottom.jpg',
    'right.jpg', 'right.jpg', 'center.jpg',
    'right-top.jpg', 'right-top.jpg', 'top.jpg'
  ],
  "left-bottom": [
    'bottom.jpg', 'left-bottom.jpg', 'left-bottom.jpg',
    'bottom.jpg', 'left-bottom.jpg', 'left-bottom.jpg',
    'center.jpg', 'left.jpg', 'left.jpg'
  ],
  "center-bottom": [
    'right-bottom.jpg', 'bottom.jpg', 'left-bottom.jpg',
    'right-bottom.jpg', 'bottom.jpg', 'left-bottom.jpg',
    'right.jpg', 'center.jpg', 'left.jpg'
  ],
  "right-bottom": [
    'right-bottom.jpg', 'right-bottom.jpg', 'bottom.jpg',
    'right-bottom.jpg', 'right-bottom.jpg', 'bottom.jpg',
    'right.jpg', 'right.jpg', 'center.jpg'
  ]
};

// Store the original URLs for each image to revert on hover end
const originalUrls = Array.from(images).map(img => img.src);

// Function to set hover URLs based on hovered image ID
function setHoverUrls(position) {
  const urls = hoverUrls[position];
  images.forEach((img, index) => {
    img.src = urls[index];
  });
}

// Function to reset images to original URLs
function resetUrls() {
  images.forEach((img, index) => {
    img.src = originalUrls[index];
  });
}

// Mapping of image IDs to hover URL sets
const positionMap = {
  "img1": "left-top",
  "img2": "center-top",
  "img3": "right-top",
  "img4": "left-middle",
  "img5": "center-center",
  "img6": "right-middle",
  "img7": "left-bottom",
  "img8": "center-bottom",
  "img9": "right-bottom"
};

// Add event listeners to each image
images.forEach(img => {
  img.addEventListener('mouseenter', () => setHoverUrls(positionMap[img.id]));
  img.addEventListener('mouseleave', resetUrls);
});
