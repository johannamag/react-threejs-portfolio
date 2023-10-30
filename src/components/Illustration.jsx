import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ShoeWhite from "./ShoeWhite";
import styled from 'styled-components'

const Desc = styled.div`
    width: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    color: gray;
    position: absolute;
    top: 100px;
    right: 100px;
`

export default function WebDev() {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ShoeWhite />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aperiam obcaecati minima quam esse quaerat!</Desc>
    </>
  );
}
