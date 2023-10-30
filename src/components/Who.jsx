import React from "react";
import styled from "styled-components";
import {Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import Cube from './Cube'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1200px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 64px;

  span {
    color: #20d2f4;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  text-transform: uppercase;
  font-weight: light;
  font-size: 22px;
`;
const Desc = styled.p`
  font-size: 16px;
  color: lightgrey;
`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px;
`;

export default function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>
            Think outside the <span>BOX</span>
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            iusto eveniet maxime eum, quisquam accusantium necessitatibus!
          </Desc>
          <Button>see more</Button>
        </Right>
      </Container>
    </Section>
  );
}
