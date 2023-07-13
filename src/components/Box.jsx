import { OrbitControls, useScroll } from '@react-three/drei'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";

const Box = () => {
const scrollControl = useScroll();
const timeline = useRef();
const box = useRef();
 
console.log(timeline)
    useLayoutEffect(() => {
        timeline.current = gsap.timeline();
        console.log(timeline.current)
        // Box animations
        let animationData = [];
        const AnimationsBox = [
            //Controls, Camera,CameraZoom
        
          ];
          animationData = [...animationData, ...AnimationsBox];
      
    }),[];

  return (
    <>
    <mesh>
    <boxGeometry></boxGeometry>
    </mesh>
    </>
  )
}

export default Box