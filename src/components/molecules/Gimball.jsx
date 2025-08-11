import { useControls } from "leva";

export default function Gimbal({ children, position, rotation, name }) {

  const controls = useControls(name, {
    posX: { value: position.x, min: -50, max: 50, step: 0.01 },
    posY: { value: position.y, min: -50, max: 50, step: 0.01 },
    posZ: { value: position.z, min: -50, max: 50, step: 0.01 },
    rotX: { value: rotation.x, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotY: { value: rotation.y, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotZ: { value: rotation.z, min: -Math.PI, max: Math.PI, step: 0.01 },
    collapsed: true
  }, { collapsed: true });

  return (
    <group
      position={[controls.posX, controls.posY, controls.posZ]}
      rotation={[controls.rotX, controls.rotY, controls.rotZ]}
    >
      {children}
    </group>
  );
}
