import React, { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function OrbitControls({ fpsTarget = 60 }) {
  const { invalidate, clock, camera, gl } = useThree()
  const frameRef = useRef()
  const frameCount = useRef(0)
  const lastFpsUpdate = useRef(clock.getElapsedTime())
  const lastRender = useRef(clock.getElapsedTime())
  const controls = useRef()

  useEffect(() => {
    const interval = 1 / fpsTarget // seconds
    controls.current = new ThreeOrbitControls(camera, document.body)
    controls.current.enableDamping = true
    controls.current.enableZoom = true
    controls.current.enablePan = true

    const loop = () => {
      const now = clock.getElapsedTime()

      if (now - lastRender.current >= interval) {
        controls.current?.update()
        invalidate()
        lastRender.current = now
        frameCount.current++
      }

      if (now - lastFpsUpdate.current >= 1) {
        console.log(frameCount.current)
        frameCount.current = 0
        lastFpsUpdate.current = now
      }

      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frameRef.current)
      controls.current?.dispose()
    }
  }, [invalidate, fpsTarget, clock, camera, gl])

  return null
}
