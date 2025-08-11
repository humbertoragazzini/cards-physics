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

  useEffect(() => {
    // Create the timeline only once
    // cardRef.current.children[0].children[0].material.transparent = true;
    // gsap.to(cardRef.current.rotation,{y:-Math.PI / 2, delay:1,duration: 2, ease:"elastic.out(1,0.5)"})
    // gsap.fromTo(cardRef.current.position,{x:position*1.5},{x:position, duration:1, delay:1.85})
    gsap.fromTo(cardRef.current.rotation, { x: -Math.PI }, { x: 0, delay: 2 });
  }, []);

  useEffect(() => {
    if (thisFirst) {
      const positions = {
        x: Math.PI,
        y: 0,
        z: 0,
      };
      gsap.to(positions, {
        x: 0,
        ease: "elastic.out(1,0.5)",
        onUpdate: () => {
          cardRef.current.position.x = Math.sin(positions.x) * translate;
          cardRef.current.position.z = Math.cos(positions.x) * -1;
        },
        duration: 5,
      });
    } else {
      const positions = {
        x: 0,
        y: 0,
        z: 0,
      };
      gsap.to(positions, {
        x: Math.PI,
        ease: "elastic.out(1,0.5)",
        onUpdate: () => {
          cardRef.current.position.x = Math.sin(positions.x) * translate;
          cardRef.current.position.z = Math.cos(positions.x) * -1;
        },
        duration: 5,
      });
    }
  }, [thisFirst]);

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
