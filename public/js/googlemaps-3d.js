// global variables
var renderer;
var scene;
var camera;



var myElem = `<div>
				<h1>This is an H1 Element</h1>
				<span class="large-txt">Hello from Three.js</span>
				<textarea>And this a textarea</textarea>
			 </div>`;



// Initializes the scene, camera and objects
function init() {

	// create scene - holds objects, cameras and lights
	scene = new THREE.Scene();

	// create camera - defines where we are looking
	camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.x = 500;
	camera.position.y = 500;
	camera.position.z = 500;
	camera.lookAt(scene.position);

	// create renderer - sets the size and position
	renderer = new THREE.CSS3DRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = 0;

	// create object and add to scene
	var cssElement = createCSS3DObject(myElem);
	cssElement.position.set(100,100,100);
	scene.add(cssElement);

	// add renderer to dom
	document.body.appendChild(renderer.domElement);

	render();
}


function createCSS3DObject(elem) {
	var divElem = document.createElement('div');
	divElem.innerHTML = elem;

	divElem.style.width = '370px';
	divElem.style.height = '370px';
	divElem.style.opacity = 0.7;
	divElem.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle();

	var obj = new THREE.CSS3DObject(divElem);

	return obj;
}


function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}





window.onload = init;



