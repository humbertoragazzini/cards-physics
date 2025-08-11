import Card from "../atoms/Card";
import { Physics, RigidBody } from "@react-three/rapier"
export default function Scene() {
  return (
    <group>
      <Physics>

      <RigidBody>
        <Card
          card={"/cards2-2.glb"}
          position={{ x: 0, y: 5, z: 0 }}
          rotationZ={0}
          thisFirst={1 == 0}
          translate={1}
          selected={false}
          setSelected={() => { }}
        >
        </Card>
      </RigidBody>
      <RigidBody type="fixed">
        <Floor></Floor>
      </RigidBody>

      </Physics>
      <ambientLight intensity={50}></ambientLight>
    </group>
  );
}


function Floor() {
  return (
    <mesh position={[0, -2, 0]}>
      <boxGeometry args={[10, 0.2, 10]}></boxGeometry>
      <meshBasicMaterial color={"white"}></meshBasicMaterial>
    </mesh>
  )
}