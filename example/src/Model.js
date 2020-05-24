/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/dribble_practice.glb', draco())
  useFrame((_, delta) => (group.current.rotation.y += delta * 2))
  return (
    <group ref={group} {...props} position-y={-3.5} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        material={materials.green}
        geometry={nodes.vase.geometry}
        position={[-6.05, 2.4, -2.84]}
        rotation={[0.42, -0.53, -0.59]}
        scale={[0.85, 0.85, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        material={materials.blue}
        geometry={nodes.cup.geometry}
        position={[0, 5.56, 0]}
        rotation={[0.27, 0.26, -0.46]}
        scale={[0.75, 0.6, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        material={materials.red}
        geometry={nodes.can.geometry}
        position={[0.54, -2.05, 1.15]}
        rotation={[-0.88, -0.75, -0.22]}
        scale={[1, 1, 1]}>
        <spotLight position={[0, 1, 0]} color="red" angle={0.6} penumbra={0.2} distance={9} intensity={6} />
      </mesh>
    </group>
  )
}
