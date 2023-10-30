import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Shoe from "./Shoe";
import styled from 'styled-components'

const Desc = styled.div`
    width: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    color: gray;
    position: absolute;
    top: 50px;
    right: 100px;
`

export default function WebDev() {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Shoe />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quibusdam assumenda iure nisi esse placeat temporibus earum totam tempore quaerat repudianda.
    </Desc>
    </>
  );
}
