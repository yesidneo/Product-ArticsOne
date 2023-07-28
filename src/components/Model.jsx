import React, { useLayoutEffect, useRef, useEffect } from "react";
import { OrbitControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/Artics.glb");

  // animations control
  const scrollControl = useScroll();
  const timeline = useRef();

  // meshes ref
  const generalGroupRef = useRef();
  console.log(scrollControl)
  console.log(timeline)
  
  const coverLeftRef = useRef();
  console.log(coverLeftRef)
  const rightCoverRef = useRef();
  const rightCoverInnerRef = useRef();
  const inside1Ref = useRef();
  const inside2Ref = useRef();
  
  const camera = useThree((state) => state.camera);

  // Html div references
  const page_1_ref = useRef();
  const page_2_ref = useRef();
  const page_3_ref = useRef();
  const page_4_ref = useRef();
  const page_5_ref = useRef();
  const page_6_ref = useRef();
  const scroll_svg = useRef();

  useLayoutEffect(() => {
    page_1_ref.current = document.getElementById("page-1");
    page_2_ref.current = document.getElementById("page-2");
    page_3_ref.current = document.getElementById("page-3");
    page_4_ref.current = document.getElementById("page-4");
    page_5_ref.current = document.getElementById("page-5");
    page_6_ref.current = document.getElementById("page-6");
    scroll_svg.current = document.getElementById("svg-scroll");
    
  }, []);

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    // headband animations
    let animationData = [];

    // -----------------------Headband Animations
    const HeadbandAnimations = [
      {
        // Html div
        // Restore previous animations
        objectToAnimate: page_1_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 0.6,
      },
      {
        objectToAnimate: scroll_svg.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 0.6,
      },
      // html div
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 1,
          duration: 0.3,
        },
        timelinePoint: 1,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 2.3,
          z: 6,
          duration: 0.9,
        },
        timelinePoint: 0.6,
      },
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0.5,
          //  y: 1.6,
          // z: -0.6,
          duration: 1.2,
        },
        timelinePoint: 0.6,
      },




    ];
    animationData = [...animationData, ...HeadbandAnimations];

    //------------------------ Sound Control Animation

    const SoundControlsAnimation = [
        {
          objectToAnimate: page_2_ref.current,
          properties: {
            opacity: 0,
            duration: 0.3,
          },
          timelinePoint: 1.9,
        },

        //html div
        {
          objectToAnimate: page_3_ref.current,
          properties: {
            opacity: 1,
            duration: 0.3,
          },
          timelinePoint: 2.2,
        },
        //Controls, Camera,CameraZoom
 
      {
        objectToAnimate: camera.position,
        properties: {
          x: -1.8,
          y: -1,
          z: 4.2,
          duration: 1.2,
        },
        timelinePoint: 2,
      },

    

      //   // General group ref
    
    ];
    animationData = [...animationData, ...SoundControlsAnimation];

    //------------------BatteryAnimations

    const BatteryAnimations = [
        // Restore previous animations
        {
          objectToAnimate: page_3_ref.current,
          properties: {
            opacity: 0,
            duration: 0.3,
          },
          timelinePoint: 3.1,
        },

        //html div
        {
          objectToAnimate: page_4_ref.current,
          properties: {
            opacity: 1,
            duration: 0.3,
          },
          timelinePoint: 3.6,
        },

      //   //Controls, Camera,CameraZoom
      
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0.5,
          y: 1.6,
          z: -0.6,
          duration: 1.2,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0.9,
          y: -1,
          z: 4.9,

          duration: 1,
        },
        timelinePoint: 3.3,
      },

      //   // General group ref
      // {
      //   objectToAnimate: camera,
      //   properties: {
      //     zoom:5,
      //     duration: 0.2,
      //     onUpdate: () => {
      //       camera.updateProjectionMatrix();
      //     },
      //   },
      //   timelinePoint: 3.6,
      // },

      //   // Baterry Cover

      {
        objectToAnimate: coverLeftRef.current.material,
        properties: {
          opacity: 0,
          transparent: true,
          duration: 1.5,
        },
        timelinePoint: 3.6,
      },
    ];

    animationData = [...animationData, ...BatteryAnimations];

    // ------------------------ Constructor Animations

    const ConstructionsAnimations = [
      // // Restore previous animations
      {
        objectToAnimate: coverLeftRef.current.material,
        properties: {
          opacity: 1,
          transparent: false,
          duration: 0.8,
        },
        timelinePoint: 4.2,
      },
        {
          objectToAnimate: page_4_ref.current,
          properties: {
            opacity: 0,
            duration: 0.3,
          },
          timelinePoint: 4.2,
        },
      //  Html div
        {
          objectToAnimate: page_5_ref.current,
          properties: {
            opacity: 1,
            duration: 0.6,
          },
          timelinePoint: 4.8,
        },

      //   //Controls, Camera,CameraZoom
    

      // General group ref
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0.2,
          y: -0.5,
          z: 0.2,
          duration: 1.2,
        },
        timelinePoint: 4.3,
      },

      {
        objectToAnimate: camera.position,
        properties: {
          x: 3,
          y: -1.3,
          z: 5,
          duration: 0.8,
        },
        timelinePoint: 4.3,
      },
      // Inside Headphones
      {
        objectToAnimate: rightCoverRef.current.position,
        properties: {
          x: 4.33,
          y: -0.89,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },

      {
        objectToAnimate: rightCoverInnerRef.current.position,
        properties: {
          x: 2.96,
          y: -0.59,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },

      {
        objectToAnimate: inside1Ref.current.position,
        properties: {
          x: 1.78,
          y: -0.4,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },

      {
        objectToAnimate: inside2Ref.current.material,
        properties: {
          x: 0.99,
          y: -0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
    ];
    animationData = [...animationData, ...ConstructionsAnimations];

    // ---------------------------- Brand logo animation

    const BrandLogoAnimations = [
      // Restore previous animations
      {
        objectToAnimate: rightCoverRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: rightCoverInnerRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: inside1Ref.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: inside2Ref.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
        {
          objectToAnimate: page_5_ref.current,
          properties: {
            opacity: 0,
            duration: 0.3,
          },
          timelinePoint: 5.8,
        },
        {
          objectToAnimate: page_6_ref.current,
          properties: {
            opacity: 1,
            duration: 0.8,
          },
          timelinePoint: 6.2,
        },

      //   // Controls, Camera, Camera zoom
      
      {
        objectToAnimate: camera.position,
        properties: {
          x: -2.1,
          y: 1,
          z: 8,
          duration: 0.8,
        },
        timelinePoint: 5.5,
      },
      //General group
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0,
          y: 1.30195,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.9,
      },
    ];
    animationData = [...animationData, ...BrandLogoAnimations];

    //------------------------ animation timeline current
    
    animationData.map((animation) => {
      timeline.current.to(
        animation.objectToAnimate,
        {
          ...animation.properties,
        },
        animation.timelinePoint
      );
    });
  }, []);

  useFrame(() => {
    timeline.current.seek(scrollControl.offset * timeline.current.duration());
  });

  return (
    <>
      <group {...props} dispose={null} ref={generalGroupRef}>
        <mesh
          name="Inside_2"
          castShadow
          receiveShadow
          geometry={nodes.Inside_2.geometry}
          material={materials.Orage_Mertallic}
          position={[0.01, 0, 0]}
          ref={inside2Ref}
        />
        <mesh
          name="Sounds"
          castShadow
          receiveShadow
          geometry={nodes.Sounds.geometry}
          material={materials.Orange_Plastic}
        />
        <mesh
          name="Inside_1"
          castShadow
          receiveShadow
          geometry={nodes.Inside_1.geometry}
          material={materials.Blue_Metallic}
          position={[0.01, 0, 0]}
          ref={inside1Ref}
        />
        <mesh
          name="Neon"
          castShadow
          receiveShadow
          geometry={nodes.Neon.geometry}
          material={materials.Material}
        />
        <mesh
          name="Battery"
          castShadow
          receiveShadow
          geometry={nodes.Battery.geometry}
          material={materials.Battery_Texture}
        />
        <mesh
          name="Cylinders"
          castShadow
          receiveShadow
          geometry={nodes.Cylinders.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Pads"
          castShadow
          receiveShadow
          geometry={nodes.Pads.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Headband_Inner"
          castShadow
          receiveShadow
          geometry={nodes.Headband_Inner.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Battery_Holder"
          castShadow
          receiveShadow
          geometry={nodes.Battery_Holder.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.01, 0]}
        />
        <mesh
          name="Cover_Left_Inn"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left_Inn.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.01, 0]}
        />
        <mesh
          name="Cover_Right_Inn"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Right_Inn.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.01, 0]}
          ref={rightCoverInnerRef}
        />
        <mesh
          name="Supports"
          castShadow
          receiveShadow
          geometry={nodes.Supports.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Cover_Right"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Right.geometry}
          material={materials.ArticsMaterial}
          ref={rightCoverRef}
        />
        <mesh
          name="Brand"
          castShadow
          receiveShadow
          geometry={nodes.Brand.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Headband_outter"
          castShadow
          receiveShadow
          geometry={nodes.Headband_outter.geometry}
          material={materials.ArticsMaterial_Headband}
        />
        <mesh
          name="Cover_Left"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left.geometry}
          material={materials.ArticsMaterial_CoverLeft}
          ref={coverLeftRef}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/Artics.glb");
