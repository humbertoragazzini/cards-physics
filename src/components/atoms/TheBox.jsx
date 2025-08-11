import { useFrame } from "@react-three/fiber";
import Gimbal from "../molecules/Gimball";
import { useRef } from "react";
import { ThreeMFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three"

export default function TheBox({name,position,rotation,envMap}) {
  const meshRef = useRef(null)

  useFrame(()=>{
    // if(meshRef.current !== null){
    //   meshRef.current.rotation.x += 0.01
    //   meshRef.current.rotation.y += 0.01
    // }
  })

  return (
    <Gimbal position={{x:position[0],y:position[1],z:position[2]}} rotation={{x:rotation[0],y:rotation[1],z:rotation[2]}} name={name}>
      <mesh ref={meshRef} scale={0.5} castShadow receiveShadow>
        <boxGeometry args={[3, 5, 0.1]}></boxGeometry>
        {/* <meshStandardMaterial color={new THREE.Color([1.5,1.5,1.5])} envMap={envMap} metalness={0} roughness={1}></meshStandardMaterial> */}
      </mesh>
    </Gimbal>
  );
}
