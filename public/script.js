var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', function(){
  var width = window.innerWidth
  var height = window.innerHeight
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

controls = new THREE.OrbitControls(camera, renderer.domElement)

//create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1)
var cubeMaterials = [
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/1.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/2.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/3.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/4.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/5.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/6.jpg'), side: THREE.DoubleSide}),
]

// greate a material, color or image texture
//var material = new THREE.MeshFaceMaterial(cubeMaterials)
var material = new THREE.MeshPhongMaterial({color: 0xFFFFFF, wireframe: false})
var cube = new THREE.Mesh( geometry, material)
scene.add(cube)

camera.position.z = 3;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8)
scene.add(ambientLight)

var light1 = new THREE.PointLight(0xFF0040, 4, 50)
scene.add(light1)
var light2 = new THREE.PointLight(0x0040FF, 2, 50)
scene.add(light2)
var light3 = new THREE.PointLight(0x80FF80, 4, 50)
scene.add(light3)

var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
directionalLight.position.set(0, 1, 0)
scene.add(directionalLight)

var spotLight = new THREE.SpotLight(0xFF45F6, 25)
spotLight.position.set(0, 3, 0)
scene.add(spotLight)

// game logic
var update = function(){
  cube.rotation.x += 0.01
  cube.rotation.y += 0.005

  var time = Date.now() * 0.0005

  light1.position.x = Math.sin(time * 0.7) * 30
  light1.position.y = Math.cos(time * 0.5) * 40
  light1.position.z = Math.cos(time * 0.3) * 30

  light2.position.x = Math.cos(time * 0.3) * 30
  light2.position.y = Math.sin(time * 0.5) * 40
  light2.position.z = Math.sin(time * 0.7) * 30

  light3.position.x = Math.sin(time * 0.7) * 30
  light3.position.y = Math.cos(time * 0.3) * 40
  light3.position.z = Math.sin(time * 0.5) * 30
}
// draw scene
var render = function(){
  renderer.render(scene, camera)
}

// run game loop (update, render, repeat)
var GameLoop = function(){
  requestAnimationFrame(GameLoop)

  update()
  render()
}

GameLoop()
