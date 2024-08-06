import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import CanvasLoader from "../Loader";

const Computers = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/robotic_arm_kuka/scene.gltf");
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.002}
      position={[1.4, -0.7, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 5, 0], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[0, -0.2, 0]} intensity={1.5} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
