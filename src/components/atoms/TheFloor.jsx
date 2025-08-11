import { useFrame } from "@react-three/fiber"
import Gimbal from "../molecules/Gimball"
import { CubeCamera, MeshReflectorMaterial } from "@react-three/drei"

export default function TheFloor({envMap,size}) {
  useFrame(({camera})=>{
    // console.log(camera)
  })
  // size = x,y,z
  return (
    <mesh receiveShadow>
      <Gimbal
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: -Math.PI/2, y: 0, z: 0 }}
        name={"TheFloor"}
      >
        {/* Side 1 - up */}
        <mesh>
          <planeGeometry args={[1, 1, 1]} position={[0,size.y/2,0]}/>
        </mesh>
        {/* Side 2 - down */}
        <mesh>
          <planeGeometry args={[1, 1, 1]} position={[0,-size.y/2,0]}/>
        </mesh>
        {/* Side 3 */}
        <mesh>
          <planeGeometry args={[1, 1, 1]} position={[]}/>
        </mesh>
        {/* Side 4 */}
        <mesh>
          <planeGeometry args={[1, 1, 1]} position={[]}/>
        </mesh>
        {/* Side 5 */}
        <mesh>
          <planeGeometry args={[1, 1, 1]} position={[]}/>
        </mesh>
        {/* Side 6 */}
        <mesh>
          <planeGeometry args={[1, 1, 1]} position={[]}/>
        </mesh>
      </Gimbal>
    </mesh>
  )
}
