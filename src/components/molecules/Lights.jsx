import AmbientLight from "../atoms/AmbientLight";
import DirectionalLight from "../atoms/DirectionalLight";

export default function Lights() {
  return (
    <group>
      <AmbientLight intensity={1}></AmbientLight>
      {/* <DirectionalLight position={{x:0,y:25,z:25}} name={"directional-light-1"}></DirectionalLight> */}
    </group>
  );
}
