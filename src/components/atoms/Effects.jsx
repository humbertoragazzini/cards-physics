import { CubeCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects({ scroll, resolution, frames, children }) {
  const cameraRef = useRef();
  const lerpSpeed = 0.05;
  const envMap = useRef(null);
  const [envMapTexture, setEnvMapTexture] = useState(null);
  const bloomRef = useRef(null);

  useFrame((state) => {
    if (cameraRef.current) {
      const cubeIndex = cameraRef.current.children.findIndex(
        (obj) => obj?.type === "CubeCamera" || obj?.constructor?.name === "HR"
      );
      const cube = cameraRef.current.children[cubeIndex];
      if (
        cube !== undefined &&
        cubeIndex !== undefined 
      ) {
        // cube.position.copy(state.camera.position)
        // cube.quaternion.copy(state.camera.quaternion)
        cube.position.y = -2
        // save current renderer state
        const currentRenderTarget = state.gl.getRenderTarget();
        const currentAutoClear = state.gl.autoClear;

        state.gl.setRenderTarget(null); // render to screen (not composer target)
        state.gl.autoClear = true; // make sure framebuffer is cleared

        // this is the critical fix: render only the scene to update the cubemap
        cube.update(state.gl, state.scene);

        // restore
        state.gl.setRenderTarget(currentRenderTarget);
        state.gl.autoClear = currentAutoClear;
      }
    }
  }, 0);

  return (
    <group>
        <group>
          <CubeCamera
            ref={cameraRef}
            position={[0, 0, 0]}
            far={25000}
            resolution={1024}
            frames={1}
          >
            {(texture) => {
              return children(texture);
            }}
          </CubeCamera>
        </group>

        <EffectComposer normalPass>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.SCREEN}
          />
          {/* <DepthOfField
            worldFocusDistance={selectedProject ? 51.7 : 0.0} // object’s Z or camera-to-object distance
            worldFocusRange={selectedProject ? 100 : 0.0} // controls how wide the in-focus band is
            bokehScale={selectedProject ? 3.7 : 0.0}
            resolutionScale={1.0}
          /> */}
        </EffectComposer>
    </group>
  );
}

// focusDistance={0.02}
// focalLength={0.02}
// bokehScale={2}
// height={480}