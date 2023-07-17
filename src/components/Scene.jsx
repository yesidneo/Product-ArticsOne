import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Model";
import Box from "./Box";

export default function Scene() {
  return (
    // <div className="canva">
    <Canvas
      className="canvas-container"
      camera={{
        fov: 65,
        position: [0, 0, 8.3],
      }}
      shadows
    >
      <ambientLight intensity={1.6} />
      <Environment files={"../models/abandoned_tiled_room_1k.hdr"} />
      <ScrollControls pages={6} damping={0.60}>
       <Model/>
        
      </ScrollControls>
    </Canvas>
    // </div>
  );
}
