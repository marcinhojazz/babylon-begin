import * as BABYLON from '@babylonjs/core'

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);
  // const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,1,-5), scene)
  // camera.attachControl();

  const hemiLight = new BABYLON.HemisphericLight(
    "hemiLight",
    new BABYLON.Vector3(0,2,0),
    scene
  );
  hemiLight.intensity = 1.5

  const ground = new BABYLON.MeshBuilder.CreateGround(
    "ground", 
    {width:20, height:20}, 
    scene
  )

  const sphere = new BABYLON.MeshBuilder.CreateSphere("mySphere", {
      diameter: 1,
      segments: 6
    }, scene);

    sphere.position = new BABYLON.Vector3(0, 1.2, 0)
  // ball.position.x = 1
  
  scene.createDefaultCameraOrLight(true, false, true)
  const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
    size: 0.75,
    width: 2,
    height: 0.5,
    depth: 0.5
  });
  
  box.position = new BABYLON.Vector3(0, .25, 0)
  
  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});