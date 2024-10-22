import * as THREE from "three"
//import * as d3 from "d3";

//Set variables for size of renderer
const w = window.innerWidth;
const h = window.innerHeight;

//Create renderer
const renderer = new THREE.WebGLRenderer({antialias : true});

//set renderer size
renderer.setSize(w,h);

//append to the html page
document.body.appendChild(renderer.domElement);

//define camera variables
const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;

//set up camera
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z=2;

const scene = new THREE.Scene();

//load on texture
//const textureLoader = new THREE.TextureLoader();
//const texture = textureLoader.load()

const geo = new THREE.SphereGeometry(1.0,64,64);
const mat = new THREE.MeshBasicMaterial({
    color: 0x000080
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemiLight);
function animate(t=0){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
animate();




