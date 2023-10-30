import React, {useState} from "react";
import styled from "styled-components";
import Design from "./Design";
import Social from "./Social";
import WebDev from "./WebDev";
import Illustration from "./Illustration";
import Product from "./Product";

const data = [
  "Web Development",
  "Design",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 65px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px pink;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

function Works() {
  const [work, setWork] = useState("Web Development")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((d) => (
              <ListItem key={d} text={d} style={{ color: work === d ? "pink" : "transparent" }}
              onClick={() => setWork(d)}>{d}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Development" ? (<WebDev />) : work === "Design" ? (<Design />) : work === "Illustration" ? (<Illustration />) : work === "Product Design" ? (<Product />) : (<Social />)}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
