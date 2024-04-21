import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import "./styles.css";
const Scene = () => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.04;
    scene.current.rotation.x += 0.004;
    scene.current.rotation.z += 0.0;
  });
  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial color="white" />
      </Box>
    </group>
  );
};

export default function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <Scene />
    </Canvas>
  );
}
