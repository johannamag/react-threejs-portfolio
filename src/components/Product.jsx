import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  color: gray;
  position: absolute;
  bottom: 20px;
  right: 500px;
`;

export default function WebDev() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure eum
        officia sit, quas aliquam!
      </Desc>
    </>
  );
}
