import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  width: 1200px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 64px;
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

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`;

export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            iusto eveniet maxime eum, quisquam accusantium necessitatibus!
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[4, 3, 2]} />
            <Sphere args={[1, 100, 200]} scale={2.6}>
              <MeshDistortMaterial
                color="#220736"
                attach="material"
                distort={0.5}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}
