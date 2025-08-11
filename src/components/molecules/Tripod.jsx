import { useControls } from "leva";
import Camera from "../atoms/Camera";
import OrbitControls from "../atoms/OrbitControls";

export default function Tripod({fps}){

    const controls = useControls("Fps",{
        fps:{options:[30,60,120],value:30}
    })

    return(
        <>
            <OrbitControls fpsTarget={fps ? fps : controls.fps}></OrbitControls>
            <Camera></Camera>
        </>
    )
}