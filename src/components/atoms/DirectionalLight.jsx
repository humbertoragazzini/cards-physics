import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import Gimbal from "../molecules/Gimball";

export default function DirectionalLight({position,name}){
    
  const directionalRef = useRef();
  useHelper(directionalRef, DirectionalLightHelper, 5, "red");
    return(
        <Gimbal position={position} rotation={{x:0,y:0,z:0}} name={name}>
            <directionalLight
                ref={directionalRef}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-left={-50}
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
                intensity={1.2}
                color={"#ffffff"}
            ></directionalLight>
        </Gimbal>
    )
}