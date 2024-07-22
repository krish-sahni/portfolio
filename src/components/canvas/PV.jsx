import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import CanvasLoader from "../Loader";

const PVModel = () => {
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
      scale={0.6}
      position={[0, -2.75, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const PV = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PVModel />
        <OrbitControls enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PV;
