// Create a scene
const scene = new THREE.Scene();
const canvas = document.querySelector('.webgl');

// Create a geometry of an aquamarine Cube
const boxWidth = 1; 
const boxHeight = 1;
const boxDepth = 1;

const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshBasicMaterial({
    color: '#a5ffd6'
});

// Mesh will contain the material and the geometry
const cubeMesh = new THREE.Mesh(cubeGeometry, material);

// add mesh to the scene
scene.add(cubeMesh);

// Sizes
const renderSize = {
    width: 800,
    height: 600
};

const aspectRatio = renderSize.width/renderSize.height;

const FIELD_OF_VIEW = 75;

// Camera: Point of view using the PerspectiveCamera
const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, aspectRatio);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(renderSize.width, renderSize.height);

renderer.render(scene, camera);


