import { useGLTF, Clone } from "@react-three/drei";

export default function Card({ card, position, positionZ, rotationZ, children }) {
  const { scene } = useGLTF(card);

  return (
    <group
      scale={[3.5, 3.5, 3.5]}
      position={[position.x, position.y, positionZ ?? position.z ?? 0]}
      rotation={[0, 0, rotationZ]}
      castShadow
      receiveShadow
    >
      <Clone
        object={scene}
        onClone={(obj) => {
          obj.traverse((child) => {
            if (child.isMesh) {
              child.material = child.material.clone();
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
        }}
      />
      {children}
    </group>
  );
}
