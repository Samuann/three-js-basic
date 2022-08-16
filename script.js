// Sizes
const renderSize = {
    width: 800,
    height: 600
};
const cubeWidth = 1; 
const cubeHeight = 1;
const cubeDepth = 1;

const aspectRatio = renderSize.width/renderSize.height;
const VERTICAL_FIELD_OF_VIEW = 75;

// Set-up
const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(VERTICAL_FIELD_OF_VIEW, aspectRatio); // Camera: Point of view using the PerspectiveCamera in degrees
const renderer = new THREE.WebGLRenderer({
    canvas
});
// calc how large the scene will look like based on what the camera is looking at.
renderer.setSize(renderSize.width, renderSize.height);  


// Create a cube
const cubeGeometry = new THREE.BoxGeometry(cubeWidth, cubeHeight, cubeDepth);
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xa5ffd6
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// add and position camera
scene.add(camera);
camera.position.z = 4;

// render the scene
renderer.render(scene, camera);