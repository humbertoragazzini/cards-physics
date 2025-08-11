import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap, { Elastic } from "gsap";

export default function Card({
  card,
  position,
  positionZ,
  rotationZ,
  translate,
  thisFirst,
  children,
  selected,
  setSelected,
}) {
  const { scene } = useGLTF(card);
  const cardRef = useRef(null);
  const tl = useRef(); // timeline stored across renders

  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone(); // 🔥 clone material here
        // child.material.metalness = 0.2;
        // child.rotation.y = -Math.PI / 2;
        // child.material.roughness = 0;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);


  return (
    <group
      scale={[3.5, 3.5, 3.5]}
      position={[position.x, position.y, position.x]}
      rotation={[0, 0, rotationZ]}
      ref={cardRef}
      castShadow
      receiveShadow
    >
      <primitive object={clonedScene} />
      {children}
    </group>
  );
}

useGLTF.preload("/untitled.glb");
