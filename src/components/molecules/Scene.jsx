import Effects from "../atoms/Effects";
import HtmlObj from "../atoms/HtmlObj";
import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";
export default function Scene() {
  return (
    <group>
      <Effects>
        {(texture) => {
          return (
            <group>
              <TheBox size={{x:1,y:1,z:1}} envMap={texture} name={"new-box-1"} position={[-1.5, 1.5, 0.5]} rotation={[0,0.2,0]}></TheBox>
              <TheBox size={{x:1,y:1,z:1}} envMap={texture} name={"new-box-2"} position={[0, 1.5, 0]} rotation={[0,0,0]}></TheBox>
              <TheBox size={{x:1,y:1,z:1}} envMap={texture} name={"new-box-3"} position={[1.5, 1.5, 0.5]} rotation={[0,-0.2,0]}></TheBox>
              <TheFloor size={{x:1,y:1,z:1}} envMap={texture}></TheFloor>
            </group>)
        }}
      </Effects>
      <HtmlObj occlude={true} position={[0, 0, -11.5]} name={"new-html-2"}>
        <div className="overflow-hidden h-screen w-screen border-2 border-black bg-black">
          <p className="text-base text-black">This is a div</p>
        </div>
      </HtmlObj>
    </group>
  );
}
