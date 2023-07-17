import { OrbitControls, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

const Box = () => {
  const scrollControl = useScroll();
  const timeline = useRef();
  const boxref = useRef();
  
  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    timeline.current.to(
      boxref.current.rotation,
      {
        y:Math.PI*2,
        duration: 9
      },
      5
    )
  
  }),[];  

  useFrame(() => {
    timeline.current.seek(scrollControl.offset * 14);
  });
  return (
    <>
      <mesh ref={boxref}>
        <boxGeometry></boxGeometry>
      </mesh>

      {/* <OrbitControls /> */}
    </>
  );
};

export default Box;
