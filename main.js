import * as BABYLON from '@babylonjs/core'

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async function() {
  const scene = new BABYLON.Scene(engine);

  // Cameras
  // const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,1,-5), scene)
  
  // scene.createDefaultCameraOrLight(true, false, true)
  // scene.createDefaultCamera();
  // scene.createDefaultLight();
  // const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 5, -10), scene)
  
  const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene)
  camera.attachControl(true);
  // camera.inputs.addMouseWheel();
  // camera.setTarget(BABYLON.Vector3.Zero());

  camera.setPosition(new BABYLON.Vector3(0, 0, -2))

  // camera.lowerBetaLimit = Math.PI / 4;
  // camera.upperBetaLimit = Math.PI / 2;

  // camera.lowerRadiusLimit = 6;
  // camera.upperRadiusLimit = 50;


  
  const hemiLight = new BABYLON.HemisphericLight(
    "hemiLight",
    new BABYLON.Vector3(0,2,0),
    scene
  );
  hemiLight.intensity = 0.5

  // const sphere = new BABYLON.MeshBuilder.CreateSphere("mySphere", {
  //     segments: 50,
  //     diameter: 0.6,
  //     // diameterY: 0.4
  //   }, scene);

  //   const sphereMaterial = new BABYLON.StandardMaterial();
  //   sphere.material = sphereMaterial;

    // sphereMaterial.diffuseTexture = new BABYLON.Texture('/wood_texture.jpeg')
    // sphereMaterial.emissiveTexture = new BABYLON.Texture('/wood_texture.jpeg')

    // sphereMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
    // sphereMaterial.specularColor = new BABYLON.Color3(1, 0, 0);

    // sphereMaterial.ambientColor = new BABYLON.Color3(0, 1, 1);
    // scene.ambientColor = new BABYLON.Color3(0, 1, 0.5)

    // sphereMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0)

    // sphereMaterial.alpha = 0.2
    // sphereMaterial.wireframe = true
    
    // sphere.position = new BABYLON.Vector3(0, 1.2, 0)

  // BOX TIPS
  const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
    size: 0.75,
    // width: 2,
    // height: 0.5,
    // depth: 0.5,
    // faceColors: [
    //   new BABYLON.Color4(1, 0, 0, 1),
    //   BABYLON.Color3.Green()
    // ]
    faceUV: [
      new BABYLON.Vector4(0, 0, 1/6, 1),
      new BABYLON.Vector4(1/6, 0, 2/6, 1),
      new BABYLON.Vector4(2/6, 0, 3/6, 1),
      new BABYLON.Vector4(3/6, 0, 4/6, 1),
      new BABYLON.Vector4(4/6, 0, 5/6, 1),
      new BABYLON.Vector4(5/6, 0, 1, 1),
    ],
    wrap: true
  });

  const boxCatMat = new BABYLON.StandardMaterial();
  box.material = boxCatMat;
  boxCatMat.emissiveTexture = new BABYLON.Texture('/cats.png');

  
  // box.position.x = -1
  // box.position.y = .2
  // box.position = new BABYLON.Vector3(0, .25, 0)

  // box.rotation.x = Math.PI / 4;
  // box.rotation = new BABYLON.Vector3(0, 0, Math.PI / 6)
  
  // box.scaling.y = 2;
  // box.scaling = new BABYLON.Vector3(2, 0.5, 1);
  
  const utilLayer = new BABYLON.UtilityLayerRenderer(scene);
  
  const positionGizmo = new BABYLON.PositionGizmo();
  positionGizmo.attachedMesh = box


  

  // Ground 1
  // const ground = new BABYLON.MeshBuilder.CreateGround("ground", {
  //   width: 5, 
  //   height: 10,
  //   subdivisions: 5,
  //   subdivisionsX: 10
  // })

  // const groundCatMat = new BABYLON.StandardMaterial();
  // ground.material = groundCatMat;
  // groundCatMat.emissiveTexture = new BABYLON.Texture('/cats.png');

  // groundCatMat.emissiveTexture.uOffset = 1.4;
  // groundCatMat.emissiveTexture.vOffset = 1.4;
  
  // groundCatMat.emissiveTexture.uScale = 5;
  // groundCatMat.emissiveTexture.vScale = 5;


  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;
  
  // Ground 2
  // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('', '/heightmap.png', {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 50,
  //   maxHeight: 2
  // });
  
  // groundFromHM.material = new BABYLON.StandardMaterial();
  // groundFromHM.material.wireframe = true;

  
  // Add 3D Text
  const fontData = await (await fetch('Montserrat_Regular.json')).json();

  const text = BABYLON.MeshBuilder.CreateText('', 'Alkimera WebXR', fontData, {
    size: 0.25,
    depth: 0.1,
    resolution: 64,
  })

  text.position = new BABYLON.Vector3(0, -.5, 0)
  
  
  return scene;
}



const scene = await createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});