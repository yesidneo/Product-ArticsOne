import {
    Environment,
    ScrollControls,
  } from "@react-three/drei";
  import { Canvas } from "@react-three/fiber";
  import React from "react";
  import { Model } from "./Model";
 

 
  
  export default function Scene() {
    return (
        
      <Canvas className="canvas-container"
        
        camera={{
          fov: 65,
          position: [0, 0, 8.3],
        }}
        shadows>
    
      <ambientLight intensity={1.6} />
      <Environment
        files={"../models/abandoned_tiled_room_1k.hdr"}
      />  
      <ScrollControls pages={2} damping={0.25} >
      <Model/>
      </ScrollControls>
      </Canvas>
    );
  }